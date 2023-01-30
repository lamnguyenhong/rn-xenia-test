import { cancelReservation, reservationCollections } from "@/api"
import { CarListItem } from "@/components"
import { Toasify } from "@/helpers"
import useStore from "@/store/useStore"
import { CarStatus, Reservation } from "@/typings/api"
import { useCallback, useEffect, useState } from "react"
import { Alert } from "react-native"
import { FlatList, View } from "react-native"
import { useStyle } from "./useStyle"

type ReservedCarsProps = {
  status: CarStatus.RESERVED | CarStatus.COMPLETED
  onPress: (reservation: Reservation) => void
}

export const CompletedReservedCars = ({
  status,
  onPress
}: ReservedCarsProps) => {
  const style = useStyle()
  const user = useStore((state) => state.user)
  const [reservations, setReservations] = useState<Reservation[]>([])

  useEffect(() => {
    const subs = reservationCollections
      .where('status', '==', status)
      .where('renterId', '==', user.uid)
      .onSnapshot((items) => {
        const result = items.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id
        } as any))
        setReservations(result.reverse())
      })

    return () => subs()
  }, [])

  const handleCancelReservation = useCallback(async (reservation: Reservation) => {
    try {
      await cancelReservation(reservation?.id || '', reservation.carId)
      Toasify.success({
        text1: 'Cancelled Reservation',
        text2: 'You have cancelled reservation'
      })
    } catch (error) {
      Toasify.error({
        text1: 'Cancelled Reservation',
        text2: 'Error on cancellingreservation'
      })
    }
  }, [])

  const handleLongPress = useCallback((reservation: Reservation) => {
    try {
      Alert.alert('Available Options', '', [
        {
          text: 'Cancel Reservation',
          onPress: () => handleCancelReservation(reservation)
        },
        {
          text: 'Close',
          style: 'cancel'
        },
      ])
    } catch (error) {

    }
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
        img={images ? images[0] : null}
        model={modelName}
        plateNumber={plateNumber}
        status={status?.toLocaleUpperCase()}
        onPress={() => onPress(item)}
        onLongPress={() => handleLongPress(item)}
      />
    )
  }, [])

  const getKey = useCallback((item: Reservation) => item.id || item.plateNumber, [])

  return (
    <View style={style.container}>
      <FlatList
        data={reservations}
        renderItem={renderItem}
        keyExtractor={getKey}
      />
    </View>
  )
}