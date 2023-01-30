import { createCarPost, isExistingCar } from '@/api'
import { PostCarForm } from '@/components/Forms/PostCarForm'
import useStore from '@/store/useStore'
import { Car } from '@/typings/api'
import React, { useCallback, useState } from 'react'
import { View } from 'react-native'
import Toast from 'react-native-toast-message';
import { UpsertCarPostScreenPayloadProps } from './UpsertCarPostScreen.props'

export const UpsertCarPostScreen = (props: UpsertCarPostScreenPayloadProps) => {

  const [currentCar, setCurrentCar] = useState<Car>({
    isAvailableForRent: true,
    modelName: '',
    images: [],
    location: {
      lat: 0,
      lng: 0
    },
    ownerId: '',
    plateNumber: '',
    ownerEmail: '',
    id: ''
  })

  const isCreatingCarPost = useStore(state => state.isCreatingCar)
  const createPost = useStore(state => state.createCarPost)

  const handlePostCar = useCallback(() => createPost(currentCar), [currentCar])

  const handleChangeText = useCallback((field: string, value: string) => {
    setCurrentCar({
      ...currentCar,
      [field]: value
    })
  }, [currentCar])

  const handleRentToggle = useCallback((isRented: boolean) => {
    setCurrentCar({
      ...currentCar,
      isAvailableForRent: isRented
    })
  }, [currentCar])

  return (
    <View>
      <PostCarForm
        car={currentCar}
        onAction={handlePostCar}
        isLoading={isCreatingCarPost}
        handleChangeText={handleChangeText}
        handleRentToggle={handleRentToggle}
      />
    </View>
  )
}