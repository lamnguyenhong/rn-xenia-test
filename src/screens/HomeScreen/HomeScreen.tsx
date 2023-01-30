import React, { useCallback, useEffect, useRef, useState } from 'react'
import { View, Linking, Image } from 'react-native'
import { HomeScreenPayloadProps } from './HomeScreen.props'
import MapView, { Marker, PROVIDER_GOOGLE, Region } from 'react-native-maps'
import { hasLocationPermission, requestLocationPermission } from '@/helpers/locationHelper'
import Geolocation from 'react-native-geolocation-service';
import { Toasify } from '@/helpers'
import useStore from '@/store/useStore'
import { carsCollection } from '@/api'
import { Car } from '@/typings/api'
import { icons } from '@/assets'

export const HomeScreen = (props: HomeScreenPayloadProps) => {
  const mapRef = useRef<any>()
  const setUserLocation = useStore((state) => state.setUserLocation)
  const setCars = useStore((state) => state.setCars)
  const cars = useStore((state) => state.cars)

  const [region, setRegion] = useState<Region>({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  })


  useEffect(() => {
    const unsubscribed = carsCollection.where('isAvailableForRent', '==', true)
      .onSnapshot((items) => {
        const result = items.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id
        } as any))
        setCars(result.reverse())
      })

    return () => unsubscribed()
  }, [])

  useEffect(() => {
    handleUserLocation()
  }, [])

  const handleUserLocation = async () => {
    try {
      const hasPermission = await hasLocationPermission();

      if (hasPermission) {
        Geolocation.getCurrentPosition(
          async position => {
            setUserLocation({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            })
            zoomCenter(position.coords)
          },
          error => {
            Toasify.error({
              text1: 'Error location',
              text2: error.message
            });
          },
          { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
        );
      } else {
        const result = await requestLocationPermission();
        if (result === 'granted') {
          Geolocation.getCurrentPosition(
            position => {
              setUserLocation({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
              })
              zoomCenter(position.coords)
            },
            error => {
              Toasify.error({
                text1: 'Error location',
                text2: error.message
              });
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
          );
        } else {
          Linking.openSettings()
        }
      }
    } catch (error: any) {
      Toasify.error({
        text1: 'Location Error',
        text2: error.message,
      });
    }
  };


  const handleRegionDidChanged = useCallback((region: Region) => {
    setRegion(region)
  }, [])

  const zoomCenter = useCallback(async (center: any) => {
    if (!mapRef.current) return;

    mapRef.current.animateCamera({
      center: center,
    });
  }, []);

  const renderMarkerItem = useCallback((car: Car) => {
    const { lat, lng } = car.location

    return (
      <Marker
        coordinate={{
          latitude: lat,
          longitude: lng
        }}
        key={car.id + car.plateNumber}
        onPress={() => props.navigation.navigate('ViewCarDetailsScreen', { car })}
      >
        <Image
          source={{ uri: car.images[0] || Image.resolveAssetSource(icons.car).uri }}
          style={{
            width: 30,
            height: 30,
          }}
        />
      </Marker>
    )
  }, [])
  return (
    <View style={{ flex: 1 }}>
      <MapView
        initialRegion={region}
        ref={mapRef}
        provider={PROVIDER_GOOGLE}
        showsMyLocationButton
        followsUserLocation
        onRegionChangeComplete={handleRegionDidChanged}
        style={{ flex: 1, position: 'absolute', top: 0, bottom: 0, height: '100%', width: '100%' }}
      >
        {cars.map(renderMarkerItem)}
      </MapView>
    </View>
  )
}