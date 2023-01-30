import authentication from '@react-native-firebase/auth';
import {
  RegistrationLoginPayload
} from './authenticationApi.types'

export const auth = authentication()

export const register = async ({
  email,
  password
}: RegistrationLoginPayload) => {
  return auth.createUserWithEmailAndPassword(email, password)
}

export const login = async ({
  email,
  password
}: RegistrationLoginPayload) => {
  return auth.signInWithEmailAndPassword(email, password)
}

export const logout = async () => {
  return auth.signOut()
}