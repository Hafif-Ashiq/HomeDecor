import React, { useEffect } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import OrderTile from '../components/Profile/OrderTile'

const MyOrders = ({ orders = [] }) => {


    // const getDate = () => "23/10"
    return (
        <View style={styles.mainView}>
            <ScrollView style={styles.scrollView} >
                {orders.map((order, index) => (
                    <OrderTile
                        tileStyle={[styles.tileStyle]}
                        key={index}
                        order_no={order.id}
                        date={order.date.toString()}
                        quantity={order.quantity}
                        amount={order.total}
                        status={order.status.is_cancelled ? "cancelled" : order.status.is_completed ? "completed" : "processing"}
                    />

                ))}

            </ScrollView>
        </View>
    )
}

export default MyOrders


const styles = StyleSheet.create({
    mainView: {
        gap: 20,
        // backgroundColor:"#FBFBFB",
        flex: 1
    },
    card: {
        marginTop: 25
    },
    scrollView: {
        marginTop: 12.5,
        flex: 1,
        flexGrow: 1,
        height: "100%"
        // paddingHorizontal: 20,
    },
    tileStyle: {
        marginVertical: 12.5
    }
})