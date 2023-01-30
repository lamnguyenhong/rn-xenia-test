import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TabNavigatorScreen } from './TabNavigator'

import {
  LoginScreen, UpsertCarPostScreen, ViewCarDetailsScreen,
  ReservationDetailsScreen
} from '@/screens'

import { appRoutes } from '@/constants/routes';

type RouteProps = {
  isAuthenticated: boolean
}
const StackNavigator = createNativeStackNavigator()

export const Routes = (props: RouteProps) => {
  return (
    <StackNavigator.Navigator>
      {props.isAuthenticated ?
        <>
          <StackNavigator.Screen
            name="HomeNavigator"
            component={TabNavigatorScreen}
            options={{
              headerShown: false,
            }}
          />
          <StackNavigator.Screen
            name="ReservationDetailsScreen"
            component={ReservationDetailsScreen as any}
            options={{
              headerTitle: ''
            }}
          />
          <StackNavigator.Screen
            name="ViewCarDetailsScreen"
            component={ViewCarDetailsScreen as any}
            options={{
              headerTitle: ''
            }}
          />
          <StackNavigator.Screen
            name="UpsertCarPostScreen"
            component={UpsertCarPostScreen as any}
            options={{
              headerTitle: ''
            }}
          />
        </>
        :
        <StackNavigator.Group screenOptions={{ headerShown: false }}>
          <StackNavigator.Screen
            name={appRoutes.LoginScreen}
            component={LoginScreen}
          />
        </StackNavigator.Group>
      }
      <StackNavigator.Group>
      </StackNavigator.Group>
    </StackNavigator.Navigator>
  )
}