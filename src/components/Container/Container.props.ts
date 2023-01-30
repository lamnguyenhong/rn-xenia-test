import { ViewStyle } from "react-native"

export type ContainerProps = {
  children: any
  style?: ViewStyle
  disableBottomPadding?: boolean
  disableTopPadding?: boolean
  top?: number
}