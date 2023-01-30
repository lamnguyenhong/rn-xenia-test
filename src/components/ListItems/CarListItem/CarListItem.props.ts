export type CarListItemProps = {
  img: string
  model: string
  email: string
  plateNumber: string
  status: string
  disabled?: boolean
  onPress: () => void
  onLongPress?: () => void
}