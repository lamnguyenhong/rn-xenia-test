import { User } from '@/typings/api';
import { LatLng } from 'react-native-maps';
import { StateCreator } from 'zustand'
import { MyState } from './useStore';

export interface AuthSlice {
  isAuthenticated: boolean,
  user: User
  currentLocation: LatLng
  setLogin: (status: boolean) => void
  setUser: (user: User) => void
  setUserLocation: (loc: LatLng) => void
  updateUser: (user: Partial<User>) => void
}

const createAuthSlice: StateCreator<
  MyState,
  [],
  [],
  AuthSlice
> = (set, get) => ({
  isAuthenticated: false,
  user: {
    email: '',
    uid: '',
  },
  currentLocation: {
    latitude: 0,
    longitude: 0,
  },
  setUserLocation: (loc) => {
    set({
      currentLocation: loc
    })
  },
  setLogin: (status) => {
    set({
      isAuthenticated: status
    })
  },
  setUser: (user) => {
    set({
      user
    })
  },
  updateUser: (user) => {
    set({
      user: {
        ...get().user,
        ...user
      }
    })
  },
})

export default createAuthSlice;
