import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import SplashLogo from "../components/icons/SplashLogo"
import { ActivityIndicator } from 'react-native-paper'
import MyColors from '../styles/MyColors'
import AsyncStorage from '@react-native-async-storage/async-storage'

const SplashScreen = ({ navigation }) => {

    useEffect(() => {
        try{
            AsyncStorage.getItem("user_id").then(res => {
                if (res != null) {
                    navigation.navigate("HomeLayout")
                    return
                }
                navigation.navigate("StartPage")
            })
        }catch(e){
            console.log(e);
        }
    }, [])

    return (
        <View style={styles.mainView}>
            <SplashLogo />
            <ActivityIndicator style={styles.loading} color={"#303030"} size={35} />
        </View>
    )
}

export default SplashScreen


const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loading: {
        position: 'absolute',
        alignSelf: 'center',
        width: "100%",
        bottom: 200,


    }

})