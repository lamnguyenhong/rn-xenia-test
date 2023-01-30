import { CarStatus } from "@/typings/api"

export type ReservationCardProps = {
  img?: string
  modelName: string
  plateNumber: string
  ownerEmail: string
  date: string
  status: CarStatus
}

export type ViewTextProps = {
  value: string
  label: string
}