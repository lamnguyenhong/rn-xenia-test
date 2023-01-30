import Toast, { BaseToastProps } from "react-native-toast-message";

export const Toasify = {
  success: (props: BaseToastProps) => Toast.show({
    type: 'success',
    ...props
  }),
  error: (props: BaseToastProps) => Toast.show({
    type: 'error',
    ...props
  }),
  info: (props: BaseToastProps) => Toast.show({
    type: 'info',
    ...props
  }),
}