import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Text, View } from 'react-native'
import { ViewCarDetailsScreenPayloadProps } from './ViewCarDetailsScreen.props'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import { CarListItem } from '@/components'
import { Car, CarStatus } from '@/typings/api'
import { carsCollection, createReservation } from '@/api'
import { Button } from '@rneui/themed'
import { useStyle } from './useStyle'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Toasify } from '@/helpers'
import useStore from '@/store/useStore'

export const ViewCarDetailsScreen = (props: ViewCarDetailsScreenPayloadProps) => {
  const style = useStyle()
  const user = useStore(state => state.user)
  const { bottom } = useSafeAreaInsets()
  const [selectedCar, setSelectedCar] = useState<Car>()

  useEffect(() => {
    const subs = carsCollection.doc(props.route.params.car.id).onSnapshot((snap) => {
      setSelectedCar({
        ...snap.data(),
        id: snap.id,
      } as any)
    })

    return () => subs()
  }, [])

  const handleReserve = useCallback(async () => {
    try {
      if (selectedCar) {
        await createReservation({
          carId: selectedCar?.id,
          modelName: selectedCar?.modelName,
          ownerId: selectedCar?.ownerId,
          plateNumber: selectedCar?.plateNumber,
          status: CarStatus.RESERVED,
          renterId: user.uid,
          reservedDate: new Date()
        })
        props.navigation.goBack()

        Toasify.success({
          text1: 'Reseved Car',
          text2: 'You have reserved car.!'
        })
      }
    } catch (error) {

    }
  }, [selectedCar, user])

  return (
    <View style={[style.container, { paddingBottom: bottom }]}>
      <View style={style.details}>
        {!!selectedCar && <CarListItem
          email={selectedCar.ownerEmail}
          img={selectedCar.images[0]}
          model={selectedCar.modelName}
          status={selectedCar.isAvailableForRent ? 'Available' : ''}
          plateNumber={selectedCar.plateNumber}
          onPress={() => { }}
          disabled
        />}
      </View>
      {selectedCar && user.uid !== selectedCar.ownerId ?
        <View style={style.actions}>
          <Button
            title="Reserve"
            onPress={handleReserve}
          />
        </View> : null}
    </View>
  )
}