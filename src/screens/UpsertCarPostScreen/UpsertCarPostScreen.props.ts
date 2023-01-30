import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/typings/navigation'

export type UpsertCarPostScreenPayload = {
  carPostId?: string
}

export type UpsertCarPostScreenPayloadProps = NativeStackScreenProps<RootStackParamList, 'UpsertCarPostScreen'>