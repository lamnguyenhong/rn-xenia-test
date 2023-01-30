import { login, register } from '@/api'
import { Container, RegistrationLoginForm } from '@/components'
import { Button } from '@rneui/themed'
import React, { useCallback, useState } from 'react'
import { View } from 'react-native'
import { useStyle } from './useStyle'

const initialCredentials = {
  password: '',
  email: ''
}

export const LoginScreen = () => {
  const style = useStyle()
  const [registrationStatus, setOnRegisterationMode] = useState(false)
  const [showPassword, setPasswordVisibility] = useState(false)
  const [credentials, setCredentials] = useState(initialCredentials)

  const handleChangeText = useCallback((field: string, value: string) => {
    setCredentials({
      ...credentials,
      [field]: value
    })
  }, [credentials])

  const handleRegister = useCallback(async () => {
    try {
      await register(credentials)
    } catch (error: any) {
      console.error(error.message)
    }
  }, [credentials])

  const handleLogin = useCallback(async () => {
    try {
      await login(credentials)
    } catch (error: any) {
      console.error(error.message)
    }
  }, [credentials])

  const handleSetRegistrationMode = useCallback((status: boolean) => {
    setCredentials({
      email: '',
      password: ''
    })
    setOnRegisterationMode(status)
  }, [])

  return (
    <Container
      style={style.container}
    >
      <View style={style.content}>
        <View>
          <RegistrationLoginForm
            onChangeText={handleChangeText}
            showPassword={showPassword}
            onReversePasswordVisibility={setPasswordVisibility}
            isLoginMode={!registrationStatus}
            onRegistrationMode={() => handleSetRegistrationMode(true)}
            credentials={credentials}
          />
        </View>
        <Button
          title={registrationStatus ? 'Register' : 'Login'}
          style={style.buttonItem}
          onPress={registrationStatus ? handleRegister : handleLogin}
        />
        {registrationStatus && <Button
          title="Cancel"
          onPress={() => handleSetRegistrationMode(false)}
          style={style.buttonItem}
        />}
      </View>
    </Container>
  )
}