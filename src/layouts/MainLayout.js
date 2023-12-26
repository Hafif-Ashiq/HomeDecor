import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { GettingStarted, Home, Product, Profile, SignIn, SignUp, Settings } from '../Pages'
import HomeLayout from './HomeLayout'
import { Header } from '../components/Headers'

const Stack = createNativeStackNavigator()
const MainLayout = () => {


  return (
    <NavigationContainer theme={{ colors: { background: '#FFFFFF' } }}>
      <Stack.Navigator
      // initialRouteName='Settings'
      >
        <Stack.Screen name='StartPage' component={GettingStarted} options={{ headerShown: false }} />
        {/* Auth Pages */}
        <Stack.Screen name='SignIn' component={SignIn} options={{ headerShown: false }} />
        <Stack.Screen name='SignUp' component={SignUp} options={{ headerShown: false }} />
        {/* Home Pages */}
        <Stack.Screen name='HomeLayout' component={HomeLayout} options={{ headerShown: false }} />
        <Stack.Screen name='Product' component={Product} options={{ headerShown: false }} />
        <Stack.Screen name='Settings' component={Settings}
          options={{ header: (props) => <Header title={"Settings"} {...props} /> }} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainLayout