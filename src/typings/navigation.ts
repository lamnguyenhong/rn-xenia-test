import {
  CarsScreenPayload,
  HomeScreenPayload,
  LoginScreenPayload,
  SettingsScreenPayload,
  ProfileScreenPayload,
  UpsertCarPostScreenPayload,
  ViewCarDetailsScreenPayload,
  ReservationDetailsScreenPayload
} from '@/screens'

export type RootStackParamList = {
  CarsScreen: CarsScreenPayload
  HomeScreen: HomeScreenPayload
  LoginScreen: LoginScreenPayload
  SettingsScreen: SettingsScreenPayload
  ProfileScreen: ProfileScreenPayload
  ReservationDetailsScreen: ReservationDetailsScreenPayload
  ViewCarDetailsScreen: ViewCarDetailsScreenPayload
  UpsertCarPostScreen: UpsertCarPostScreenPayload
}