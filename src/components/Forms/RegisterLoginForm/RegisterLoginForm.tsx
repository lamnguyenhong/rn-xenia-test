import { Input, Text } from '@rneui/themed'
import React from 'react'
import { Pressable, TouchableOpacity, View } from 'react-native'
import { RegistrationLoginFormProps } from './RegistrationLoginForm.props'
import { useStyle } from './useStyle'

export const RegistrationLoginForm = ({
  showPassword,
  isLoginMode,
  credentials,
  onChangeText,
  onReversePasswordVisibility,
  onRegistrationMode,
}: RegistrationLoginFormProps) => {
  const style = useStyle()

  const {
    email,
    password
  } = credentials

  return (
    <View>
      <View>
        <Input
          placeholder='Enter Email'
          onChangeText={(val) => onChangeText('email', val)}
          value={email}
        />
      </View>
      <View>
        <Input
          placeholder='Enter Password'
          onChangeText={(val) => onChangeText('password', val)}
          rightIcon={{
            type: 'font-awesome',
            name: showPassword ? 'eye' : 'eye-slash',
            onPress: () => onReversePasswordVisibility(!showPassword)
          }}
          secureTextEntry={!showPassword}
          value={password}
        />
      </View>
      {isLoginMode && <View style={style.registerStyleView}>
        <TouchableOpacity onPress={onRegistrationMode}>
          <Text style={style.registrationText}>
            Dont have an account? Register!
          </Text>
        </TouchableOpacity>
      </View>}
    </View>
  )
}