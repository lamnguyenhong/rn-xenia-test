import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/typings/navigation'
import { Car } from '@/typings/api';

export type ViewCarDetailsScreenPayload = {
  car: Car
}

export type ViewCarDetailsScreenPayloadProps = NativeStackScreenProps<RootStackParamList, 'ViewCarDetailsScreen'>