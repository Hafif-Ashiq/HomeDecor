
import React, { useEffect, useState } from 'react'
import { Home, MyOrders, Profile } from '../Pages'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MyColors from '../styles/MyColors';
import { Dimensions, StyleSheet, View } from 'react-native';



const OrdersTab = createMaterialTopTabNavigator()
const { width, height } = Dimensions.get('window');


const OrdersLayout = () => {

    const [deliveredArray, setDeliveredArray] = useState([])
    const [processingArray, setProcessingArray] = useState([])
    const [cancelledArray, setCancelledArray] = useState([])

    const orderArray = [
        {
            quantity: 4,
            status: {
                is_completed: true,
                is_processed: false,
                is_cancelled: false,
            },
            total_amount: 1000,
            id: 1,
            date: "20/12/2023"
        },
        {
            quantity: 4,
            status: {
                is_completed: false,
                is_processed: true,
                is_cancelled: false,
            },
            total_amount: 15000,
            id: 2,
            date: "20/12/2023"
        },
        {
            quantity: 4,
            status: {
                is_completed: false,
                is_processed: true,
                is_cancelled: false,
            },
            total_amount: 15000,
            id: 2,
            date: "20/12/2023"
        },
        {
            quantity: 4,
            status: {
                is_completed: true,
                is_processed: false,
                is_cancelled: false,
            },
            total_amount: 15000,
            id: 2,
            date: "20/12/2023"
        },
        {
            quantity: 4,
            status: {
                is_completed: false,
                is_processed: false,
                is_cancelled: true,
            },
            total_amount: 15000,
            id: 2,
            date: "20/12/2023"
        },
        {
            quantity: 4,
            status: {
                is_completed: true,
                is_processed: false,
                is_cancelled: false,
            },
            total_amount: 15000,
            id: 2,
            date: "20/12/2023"
        },
        {
            quantity: 4,
            status: {
                is_completed: true,
                is_processed: false,
                is_cancelled: false,
            },
            total_amount: 15000,
            id: 2,
            date: "20/12/2023"
        },

    ]

    useEffect(() => {
        const delivered = orderArray.filter(order => order.status.is_completed)
        const processing = orderArray.filter(order => order.status.is_processed)
        const cancelled = orderArray.filter(order => order.status.is_cancelled)

        setDeliveredArray(delivered)
        setCancelledArray(cancelled)
        setProcessingArray(processing)
    }, [])

    return (
        <OrdersTab.Navigator

            // initialRouteName='Delivered'
            screenOptions={{
                // tabBarPressOpacity: 0,
                tabBarPressColor: "transparent",
                tabBarStyle: {
                    elevation: 0,
                    backgroundColor: '#FFFFFF',
                },
                tabBarInactiveTintColor: MyColors.textDisabled,
                tabBarActiveTintColor: MyColors.primaryButton,
                tabBarLabelStyle: {
                    paddingTop: 20,
                    paddingBottom: 5,
                    fontSize: 16,
                    fontWeight: "600",
                    fontFamily: "Nunito Sans"
                },

                tabBarIndicatorStyle: {
                    backgroundColor: MyColors.primaryButton,
                    width: 40,
                    height: 5,
                    marginLeft: ((width / 3) / 2) - 20,
                    borderRadius: 5
                },


            }}
        >
            <OrdersTab.Screen
                name='Delivered'
            // component={Home}
            >
                {() => <MyOrders orders={deliveredArray} />}
            </OrdersTab.Screen>

            <OrdersTab.Screen
                name='Processing'
            // component={Home}

            >
                {() => <MyOrders orders={processingArray} />}
            </OrdersTab.Screen>

            <OrdersTab.Screen
                name='Cancelled'
            // component={Home}


            >
                {() => <MyOrders orders={cancelledArray} />}
            </OrdersTab.Screen>

        </OrdersTab.Navigator>
    )
}

export default OrdersLayout



const TabBarLabel = ({ state }) => {


    const IndicatorStyles = StyleSheet.create({
        indicator: {
            width: 40,
            backgroundColor: MyColors.primaryButton,
            height: 4
        }
    })

    return (
        <View style={IndicatorStyles.indicator}></View>
    )
}