import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { ReservationCard } from '@/components'
import { Button } from '@rneui/themed'
import { View } from 'react-native'
import { ReservationDetailsScreenPayloadProps } from './ReservationDetailsScreen.props'
import { format } from 'date-fns'
import { useStyle } from './useStyle'
import { carsCollection, markReservationCompleted } from '@/api'
import { Car, CarStatus } from '@/typings/api'
import { Toasify } from '@/helpers'

export const ReservationDetailsScreen = ({
  route: {
    params: {
      reservation
    }
  },
  navigation
}: ReservationDetailsScreenPayloadProps) => {
  const [car, setCar] = useState<Car>()
  const style = useStyle()

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const carSnap = await carsCollection.doc(reservation.carId).get()
        if (carSnap.exists) {
          setCar(carSnap.data() as any)
        }

      } catch (error: any) {
        Toasify.error({
          text1: 'Fetching Error',
          text2: error.message
        })
      }
    }

    fetchItem()
  }, [reservation])

  const handleMarkAsCompleted = useCallback(async () => {
    try {
      if (reservation.id) {
        await markReservationCompleted(reservation.id, reservation.carId)
      }
      navigation.goBack()
    } catch (error) {
      Toasify.error({
        text1: 'Update Error',
        text2: 'Cannot mark as completed'
      })
    }
  }, [reservation])

  const dateText = useMemo(() => {
    const formatDate = (seconds: number) => format(new Date(seconds * 1000), 'MMM dd, yyyy')
    if (reservation.status === CarStatus.COMPLETED) {
      return reservation?.completedDate?.seconds ? formatDate(reservation?.completedDate?.seconds) : format(new Date(), 'MMM dd, yyyy')
    }

    return reservation?.reservedDate?.seconds ? formatDate(reservation?.reservedDate?.seconds) : format(new Date(), 'MMM dd, yyyy')
  }, [reservation.status])

  return (
    <View>
      <ReservationCard
        date={reservation?.reservedDate?.seconds ? dateText : ''}
        img={car ? car.images[0] : ''}
        modelName={reservation.modelName}
        ownerEmail={car ? car.ownerEmail : ''}
        plateNumber={reservation.plateNumber}
        status={reservation.status}
      />
      {reservation.status === CarStatus.RESERVED && <View style={style.actionBttn}>
        <Button
          title="Mark as Completed"
          onPress={handleMarkAsCompleted}
        />
      </View>}
    </View>
  )
}