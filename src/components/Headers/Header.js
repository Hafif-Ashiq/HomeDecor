import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import TextStyles from '../../styles/TextStyles'
import { Back, CartIcon, Logout } from '../icons'
import MyColors from '../../styles/MyColors'
import AsyncStorage from '@react-native-async-storage/async-storage'


const Header = ({ navigation, title }) => {


    const handleLogout = async () => {
        await AsyncStorage.removeItem("user_id").then((res) => {
            console.log(res);
            console.log("Logged Out");
            navigation.navigate("SignIn")
        })
    }

    return (
        <View
            style={[
                styles.mainView,
                title == "Profile" ? styles.profileBackground : ""
            ]}
        >

            <View>
                {
                    title != "Profile" ?
                        <TouchableOpacity
                            activeOpacity={0.9}
                            onPress={() => navigation.goBack()}
                            style={styles.backButton}
                        >
                            <Back />
                        </TouchableOpacity>
                        : <></>
                }
            </View>

            <View>
                <Text
                    style={[
                        TextStyles.merriweather,
                        TextStyles.headerHeading,
                        TextStyles.bold,
                        TextStyles.primaryText
                    ]}
                >
                    {title}
                </Text>
            </View>
            <View>
                {
                    title == "Profile" ?
                        <TouchableOpacity
                            activeOpacity={0.9}
                            onPress={handleLogout}
                            style={styles.backButton}
                        >
                            <Logout />
                        </TouchableOpacity>
                        : <></>
                }
            </View>
        </View>
    )
}

export default Header


const styles = StyleSheet.create({
    mainView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 15,
    },
    text: {
        lineHeight: 25,
        textAlign: "center"
    },
    profileBackground: {
        backgroundColor: MyColors.profileBackground
    }

})