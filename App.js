
import React, { createContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'

import BottomStack from './src/stack/BottomStack'
import TitleScreen from './src/pages/TitleScreen'
import SignInScreen from './src/pages/SignInScreen'

import UserProvider from './src/context/userContext'

const Stack = createStackNavigator()

const theme = {
  ...DefaultTheme,
  roundness: 10,
  colors: {
    ...DefaultTheme.colors,
    primary: '#E4E4E4',
    accent: '#f1c40f'
  }
}

export default function App () {
  return (
    <UserProvider>

      <PaperProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='TitleScreen' screenOptions={{ header: () => null }}>
            <Stack.Screen name='BottomStack' component={BottomStack} />
            <Stack.Screen name='TitleScreen' component={TitleScreen} />
            <Stack.Screen name='SignInScreen' component={SignInScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </UserProvider>
  )
}
