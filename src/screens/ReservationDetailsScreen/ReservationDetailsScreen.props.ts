import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/typings/navigation'
import { Reservation } from '@/typings/api';

export type ReservationDetailsScreenPayload = {
  reservation: Reservation
}

export type ReservationDetailsScreenPayloadProps = NativeStackScreenProps<RootStackParamList, 'ReservationDetailsScreen'>