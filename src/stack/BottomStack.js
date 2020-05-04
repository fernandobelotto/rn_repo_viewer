import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import ProfileScreen from '../pages/ProfileScreen'
import ReposScreen from '../pages/ReposScreen'
import StarsScreen from '../pages/StarsScreen'

const Tab = createBottomTabNavigator()

export default function BottomStack () {
  return (
    <Tab.Navigator
      initialRouteName='Feed'
      tabBarOptions={{
        activeTintColor: '#161616',
        activeBackgroundColor: '#E9E9E9',
        inactiveBackgroundColor: '#E9E9E9',
        showLabel: false
      }}
    >
      <Tab.Screen
        name='Feed'
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name='account-circle' color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        name='Notifications'
        component={ReposScreen}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name='book' color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        name='Profile'
        component={StarsScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name='star-circle' color={color} size={size} />
          )
        }}
      />
    </Tab.Navigator>
  )
}
