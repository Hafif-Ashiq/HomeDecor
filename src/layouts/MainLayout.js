import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { GettingStarted, Home, Product, Profile, SignIn, SignUp } from '../Pages'
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
        }}

      >
        <Stack.Screen name='StartPage' component={GettingStarted} />
        {/* Auth Pages */}
        <Stack.Screen name='SignIn' component={SignIn} />
        <Stack.Screen name='SignUp' component={SignUp}/>
        {/* Home Pages */}
        <Stack.Screen name='HomeLayout' component={HomeLayout} />
        <Stack.Screen name='Product' component={Product} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainLayout