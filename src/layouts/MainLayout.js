import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { GettingStarted, Home } from '../Pages'

const Stack = createNativeStackNavigator()
const MainLayout = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='StartPage' component={GettingStarted} />
        {/* <Stack.Screen name='Login' />
        <Stack.Screen name='Signup' /> */}
        <Stack.Screen name='Home' component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainLayout