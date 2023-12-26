import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { GettingStarted, Home, MyOrders, Product, Profile } from '../Pages'
import { Header } from '../components/Headers'
import OrdersLayout from './OrdersLayout'
import { Alert } from 'react-native'

const ProfileStack = createNativeStackNavigator()
const ProfileStackLayout = () => {


    return (

        <ProfileStack.Navigator
        // initialRouteName='Orders'
        >

            <ProfileStack.Screen name='Profile' component={Profile}
                options={{
                    header: (props) => <Header title={"Profile"} {...props} />,

                }}

            />
            <ProfileStack.Screen
                name="Orders"
                component={OrdersLayout}
                options={{
                    header: (props) => <Header title={"My Orders"} {...props} />
                }}
            />
        </ProfileStack.Navigator>

    )
}

export default ProfileStackLayout