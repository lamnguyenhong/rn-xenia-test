import { createCarPost, isExistingCar } from '@/api';
import { Toasify } from '@/helpers';
import { Car } from '@/typings/api';
import Toast, { SuccessToast } from 'react-native-toast-message';
import { StateCreator } from 'zustand'
import { MyState } from './useStore';

export interface CarsSlice {
  cars: Car[],
  isCreatingCar?: boolean
  createCarPost: (car: Car) => void
  setCars: (car: Car[]) => void
}

const createCarsSlice: StateCreator<
  MyState,
  [],
  [],
  CarsSlice
> = (set, get) => ({
  cars: [],
  isCreatingCar: false,
  setCars: (cars) => {
    set({
      cars
    })
  },
  createCarPost: async (currentCar) => {
    try {
      const { currentLocation } = get()
      set({
        isCreatingCar: true
      })
      const { user } = get()
      const isExisting = await isExistingCar(currentCar.plateNumber)

      if (isExisting) {
        Toasify.error({
          text1: 'Creation Error',
          text2: 'Existing car'
        })
        return
      }

      await createCarPost({
        ...currentCar,
        ownerId: user.uid,
        location: {
          lat: currentLocation.latitude,
          lng: currentLocation.longitude,
        },
        ownerEmail: user.email
      })

      Toasify.success({
        text1: 'Successfully Created',
        text2: 'You have posted a car!'
      })
    } catch (error: any) {
      Toasify.error({
        text1: 'Creation Error',
        text2: error.message
      })
    } finally {
      set({
        isCreatingCar: false
      })
    }
  }
})

export default createCarsSlice;
