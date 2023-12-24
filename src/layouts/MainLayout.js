import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { GettingStarted, Home } from '../Pages'
import HomeLayout from './HomeLayout'

const Stack = createNativeStackNavigator()
const MainLayout = () => {

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#FFFFFF'

    },

  };

  return (
    <NavigationContainer theme={{ colors: { background: '#FFFFFF' } }}>
      <Stack.Navigator
        // initialRouteName='HomeLayout'
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: 'lightblue' },

        }}

      >
        <Stack.Screen name='StartPage' component={GettingStarted} />
        {/* <Stack.Screen name='Login' component={Login} /> */}
        {/* <Stack.Screen name='Signup' /> */}
        <Stack.Screen name='HomeLayout' component={HomeLayout} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainLayout