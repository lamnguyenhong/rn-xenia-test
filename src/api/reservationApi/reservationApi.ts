import { Car, CarStatus, Reservation } from "@/typings/api";
import firestore from '@react-native-firebase/firestore';
import { updateCarPost } from "../carAPI";

export const reservationCollections = firestore().collection('reservations');

export const createReservation = async (reservation: Reservation) => {

  // need to add validator here (Joi, Validator) etc..
  await reservationCollections.add(reservation)

  return await updateCarPost({
    id: reservation.carId,
    isAvailableForRent: false,
  })
}

export const updateReservation = async (reservationId: string, reservation: Partial<Reservation>) => {

  // need to add validator here (Joi, Validator) etc..
  await reservationCollections.doc(reservationId).update(reservation)

  return true
}

export const cancelReservation = async (reservationId: string, carId: string) => {

  // need to add validator here (Joi, Validator) etc..
  await reservationCollections.doc(reservationId).delete()
  await updateCarPost({
    id: carId,
    isAvailableForRent: true
  })

  return true
}

export const markReservationCompleted = async (reservationId: string, carId: string) => {
  await updateReservation(reservationId, { status: CarStatus.COMPLETED, completedDate: new Date() })
  await updateCarPost({
    id: carId,
    isAvailableForRent: true
  })

  return true
}

export const isExistingReservationCar = async (plateNumber: string) => {
  const result = await reservationCollections.where('plateNumber', '==', plateNumber).get()

  return result.size > 0
}