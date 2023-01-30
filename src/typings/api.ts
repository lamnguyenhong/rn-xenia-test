export type LatLong = {
  lng: number
  lat: number
}

export enum CarStatus {
  RESERVED = 'reserved',
  COMPLETED = 'completed',
  AVAILABLE = 'available'
}

export type Car = {
  modelName: string
  isAvailableForRent: boolean
  ownerId: string
  ownerEmail: string
  plateNumber: string,
  images: string[]
  location: LatLong
  id: string
}

export type Reservation = {
  modelName: string
  ownerId: string
  renterId: string
  plateNumber: string,
  carId: string
  status: CarStatus
  id?: string
  reservedDate: Date | any
  completedDate?: Date | any
}

export type User = {
  uid: string
  email: string
}