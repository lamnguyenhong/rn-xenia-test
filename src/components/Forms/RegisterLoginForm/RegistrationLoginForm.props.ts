
type Credentials = {
  password: string
  email: string
}

export type RegistrationLoginFormProps = {
  showPassword?: boolean
  isLoginMode?: boolean
  credentials: Credentials
  onChangeText: (field: string, value: string) => void
  onReversePasswordVisibility: (status: boolean) => void
  onRegistrationMode?: () => void
}