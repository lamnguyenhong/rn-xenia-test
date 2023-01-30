import { Container } from '@/components'
import { Button, ListItem } from '@rneui/themed'
import React from 'react'
import { Text, View } from 'react-native'
import { SettingsScreenPayloadProps } from './SettingsScreen.props'
import { logout } from '@/api'
import { MARGIN_HORIZONTAL, MARGIN_VERTICAL } from '@/constants/ui'

export const SettingsScreen = (props: SettingsScreenPayloadProps) => {
  return (
    <Container>
      <View style={{
        marginHorizontal: MARGIN_HORIZONTAL,
        flex: 1,
      }}>
        <View>

          <Button
            title="Change Password"
          />
        </View>
        <View style={{ marginVertical: MARGIN_VERTICAL }}>
          <Button
            title="Logout"
            onPress={logout}
          />
        </View>
      </View>
    </Container>
  )
}