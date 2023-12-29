import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {
  GettingStarted,
  Home,
  Product,
  Profile,
  SignIn,
  SignUp,
  Settings,
  MyCart,
  ShippingPage,
  Payment,
  CheckOut,
  Success

} from '../Pages';
import HomeLayout from './HomeLayout';
import { CartHeader, Header } from '../components/Headers';
import SplashScreen from '../Pages/SplashScreen'
import { StatusBar } from 'react-native';

const Stack = createNativeStackNavigator();
const MainLayout = () => {
  StatusBar.setBackgroundColor("white")
  // StatusBar.setBarStyle("black")
  // StatusBar.setTranslucent(true)


  const options = {
    headerShown: false
  }


  return (
    <NavigationContainer theme={{ colors: { background: '#FFFFFF' } }}>
      <Stack.Navigator
      // initialRouteName='Payment'
      >
        <Stack.Screen name='Splash' component={SplashScreen} options={options} />
        <Stack.Screen
          name='StartPage'
          component={GettingStarted}
          options={options}
        />
        {/* Auth Pages */}
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={options}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={options}
        />
        {/* Home Pages */}
        <Stack.Screen
          name="HomeLayout"
          component={HomeLayout}
          options={options}
        />
        <Stack.Screen
          name="Product"
          component={Product}
          options={options}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{ header: props => <Header title={'Settings'} {...props} /> }}
        />
        <Stack.Screen
          name="Shipping"
          component={ShippingPage}
          options={{
            header: props => (
              <Header title={'Add Shipping Address'} {...props} />
            ),
          }}
        />
        <Stack.Screen
          name="Payment"
          component={Payment}
          options={{
            header: props => <Header title={'Add Payment Method'} {...props} />,
          }}
        />
        <Stack.Screen
          name="MyCart"
          component={MyCart}
          options={{ header: props => <Header title={'My Cart'} {...props} /> }}
        />
        <Stack.Screen
          name="CheckOut"
          component={CheckOut}
          options={{ header: props => <Header title={'Check Out'} {...props} /> }}
        />
        <Stack.Screen
          name="Success"
          component={Success}
          options={options}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainLayout;
