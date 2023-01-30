import { Car } from "@/typings/api"

export type PostCarFormProps = {
  car: Partial<Car>
  isLoading?: boolean
  onAction: () => void
  handleRentToggle: (stat: boolean) => void
  handleChangeText: (field: string, value: string) => void
}