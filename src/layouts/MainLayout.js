import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { GettingStarted, Home, Product, Profile, SignIn, SignUp, Settings, MyCart, ShippingPage, Payment } from '../Pages'
import HomeLayout from './HomeLayout'
import { CartHeader, Header } from '../components/Headers'
import SplashScreen from '../Pages/SplashScreen'

const Stack = createNativeStackNavigator()
const MainLayout = () => {


  const options = {
    headerShown: false
  }


  return (
    <NavigationContainer theme={{ colors: { background: '#FFFFFF' } }}>
      <Stack.Navigator
      // initialRouteName='HomeLayout'
      >
        <Stack.Screen name='Splash' component={SplashScreen} options={options} />
        <Stack.Screen name='StartPage' component={GettingStarted} options={{ headerShown: false }} />
        {/* Auth Pages */}
        <Stack.Screen name='SignIn' component={SignIn} options={{ headerShown: false }} />
        <Stack.Screen name='SignUp' component={SignUp} options={{ headerShown: false }} />
        {/* Home Pages */}
        <Stack.Screen name='HomeLayout' component={HomeLayout} options={{ headerShown: false }} />
        <Stack.Screen name='Product' component={Product} options={{ headerShown: false }} />
        <Stack.Screen name='Settings' component={Settings}
          options={{ header: (props) => <Header title={"Settings"} {...props} /> }} />
        <Stack.Screen name='Shipping' component={ShippingPage}
          options={{ header: (props) => <Header title={"Add Shipping Address"} {...props} /> }} />
        <Stack.Screen name='Payment' component={Payment}
          options={{ header: (props) => <Header title={"Add Payment Method"} {...props} /> }} />
        <Stack.Screen name='MyCart' component={MyCart}
          options={{ header: (props) => <Header title={"My Cart"} {...props} /> }} />


      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainLayout