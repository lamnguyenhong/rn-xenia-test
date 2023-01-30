import React, { useMemo } from 'react'
import { appRoutes } from '@/constants/routes'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  CarsScreen,
  HomeScreen,
  ProfileScreen,
  SettingsScreen
} from '@/screens'
import { replace } from 'lodash'

import { Icon } from '@rneui/base'
import { useStyle } from './useStyle'

const Tab = createBottomTabNavigator()
type TabNavigatorPayload = [string, (props: any) => JSX.Element]

export const TabNavigatorScreen = () => {
  const style = useStyle()

  const tabScreens = useMemo<TabNavigatorPayload[]>(() => [
    [appRoutes.HomeScreen, HomeScreen],
    [appRoutes.CarsScreen, CarsScreen],
    [appRoutes.ProfileScreen, ProfileScreen],
    [appRoutes.SettingsScreen, SettingsScreen],
  ], [])

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: style.container,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = 'font-awesome'
          const iconMap = {
            [appRoutes.HomeScreen]: 'home',
            [appRoutes.CarsScreen]: 'car',
            [appRoutes.ProfileScreen]: 'user',
            [appRoutes.SettingsScreen]: 'gear',
          }

          return <Icon
            name={iconMap[route.name]}
            type={iconName}
            size={size}
            color={focused ? style.activeStyle.color : color}
          />
        },
        tabBarActiveTintColor: style.activeStyle.color,
        tabBarInactiveTintColor: 'gray',
        tabBarLabel: replace(route.name, 'Screen', ''),
        tabBarShowLabel: false
      })}
    >
      {tabScreens.map(([name, component]) => (
        <Tab.Screen
          name={name}
          key={name}
          component={component}
          options={{ headerShown: false }}
        />
      ))}
    </Tab.Navigator>
  );
}