import { Car } from "@/typings/api";
import firestore from '@react-native-firebase/firestore';

export const carsCollection = firestore().collection('cars');

export const createCarPost = async (car: Car) => {

  // need to add validator here (Joi, Validator) etc..
  return carsCollection.add(car)
}

export const updateCarPost = async ({
  id,
  ...restCar
}: Partial<Car>) => {

  // need to add validator here (Joi, Validator) etc..
  return carsCollection.doc(id).update(restCar)
}

export const isExistingCar = async (plateNumber: string) => {
  const result = await carsCollection.where('plateNumber', '==', plateNumber).get()

  return result.size > 0
}