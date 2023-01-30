import { carsCollection } from "@/api"
import { CarListItem } from "@/components"
import useStore from "@/store/useStore"
import { Car } from "@/typings/api"
import { useNavigation } from "@react-navigation/native"
import { useCallback, useEffect } from "react"
import { FlatList, View } from "react-native"
import { useStyle } from "./useStyle"

type AllCarsProps = {
  onClick: (car: Car) => void
}

export const AllCars = (props: AllCarsProps) => {
  const style = useStyle()
  const setCars = useStore((state) => state.setCars)
  const cars = useStore(state => state.cars)

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

  const renderItem = useCallback(({ item }: any) => {
    const {
      images,
      modelName,
      ownerEmail,
      plateNumber
    } = item

    return (
      <CarListItem
        email={ownerEmail}
        img={images[0]}
        model={modelName}
        plateNumber={plateNumber}
        status="Available"
        onPress={() => props.onClick(item)}
      />
    )
  }, [props.onClick])

  const getKey = useCallback((item: Car) => item.plateNumber, [])

  return (
    <View style={style.container}>
      <FlatList
        data={cars}
        renderItem={renderItem}
        keyExtractor={getKey}
      />
    </View>
  )
}