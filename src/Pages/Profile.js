import React, { useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import TextStyles from '../styles/TextStyles'
import PageCard from '../components/Profile/PageCard'
import MyColors from '../styles/MyColors'

const Profile = ({ navigation }) => {

    const [orders, setOrders] = useState(10)

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
                        Mingyu
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
                        mina_k@gmail.com
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
                    onPress={() => navigation.navigate("Settings")}
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