import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import TextStyles from '../styles/TextStyles'
import PageCard from '../components/Profile/PageCard'
import MyColors from '../styles/MyColors'
import { firebase } from '@react-native-firebase/firestore'
import AsyncStorage from '@react-native-async-storage/async-storage'
import auth from "@react-native-firebase/auth"

const Profile = ({ navigation }) => {

    const [orders, setOrders] = useState(0)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    useEffect(() => {
        const getUserCreds = async () => {
            const userId = await AsyncStorage.getItem('user_id')

            setEmail(auth().currentUser.email)
            firebase.firestore().collection('users').doc(userId).get()
                .then(response => {
                    const data = response["_data"]
                    setName(data["name"])
                    setOrders(data["orders"].length)
                }).catch(e => console.error(e))

        }
        getUserCreds()

    }, [])

    const goToSettings = () => {

        const dataToSend = {
            name: name,
            email: email,
        }

        navigation.navigate("Settings", { info: dataToSend })
    }

    return (
        <View style={styles.mainView}>
            <View style={styles.infoView}>
                <Image style={styles.image} source={require("../assets/person.jpg")} />
                <View style={styles.textView}>
                    <Text
                        style={[
                            TextStyles.centerText,
                            TextStyles.bold,
                            TextStyles.profileHeading,
                            TextStyles.primaryText,
                            TextStyles.nunito
                        ]}
                    >
                        {name}
                    </Text>
                    <Text
                        style={[
                            TextStyles.centerText,
                            TextStyles.regular,
                            TextStyles.nunito,
                            TextStyles.headerHeading,
                            TextStyles.descriptionText
                        ]}
                    >
                        {email}
                    </Text>
                </View>
            </View>
            <View style={styles.cardView}>
                <PageCard
                    heading={"My Orders"}
                    subText={`Already have ${orders} orders`}
                    onPress={() => navigation.navigate("Orders")}
                />
                <PageCard
                    heading={"Settings"}
                    subText={`Notification, Password, FAQ, Contact`}
                    onPress={goToSettings}
                />

            </View>
        </View>
    )
}

export default Profile


const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: MyColors.profileBackground,
        padding: 20
    },
    infoView: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: '50%',
        gap: 15,
        // backgroundColor: 'black'
    },
    image: {
        width: 180,
        height: 180,
        borderRadius: 500
    },
    textView: {
        justifyContent: 'center'
    },
    cardView: {
        height: '50%',
        justifyContent: "",
        alignItems: 'center',
        marginTop: 60,
        width: "100%",
        gap: 15
    }
})