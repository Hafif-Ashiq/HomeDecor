
import React, { useEffect, useState } from 'react'
import { Home, MyOrders, Profile } from '../Pages'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MyColors from '../styles/MyColors';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { firebase } from '@react-native-firebase/firestore';



const OrdersTab = createMaterialTopTabNavigator()
const { width, height } = Dimensions.get('window');


const OrdersLayout = () => {

    const [allOrders, setAllOrders] = useState([])
    const [deliveredArray, setDeliveredArray] = useState([])
    const [processingArray, setProcessingArray] = useState([])
    const [cancelledArray, setCancelledArray] = useState([])
    const [loading, setIsLoading] = useState(false)

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


    const getuserID = async () => {
        const user_id = await AsyncStorage.getItem("user_id")
        console.log("User ID Set == " + user_id);

        return user_id
    }

    useEffect(() => {
        setIsLoading(true)
        getOrders()
    }, [])

    useEffect(() => {

        const delivered = allOrders.filter(order => order.status?.is_completed)
        console.log(delivered);
        const processing = allOrders.filter(order => order.status?.is_processed)
        console.log(processing);
        const cancelled = allOrders.filter(order => order.status?.is_cancelled)
        console.log(cancelled);
        setDeliveredArray(delivered)
        setCancelledArray(cancelled)
        setProcessingArray(processing)
        setIsLoading(false)
    }, [allOrders])


    const getOrders = async () => {
        const userId = await getuserID()
        firebase
            .firestore()
            .collection("users")
            .doc(userId)
            .collection("orders")
            .get()
            .then(res => {
                let array = []
                res.forEach((item) => array.push({ id: item.id, ...item.data() }))
                console.log(array);
                array = array.filter(item => item.id != "empty")
                setAllOrders(array)

            })

    }

    return (
        <>
            {loading ? <Text>loading</Text> : <OrdersTab.Navigator

                initialRouteName='Processing'
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

            </OrdersTab.Navigator>}
        </>
    )
}

export default OrdersLayout


