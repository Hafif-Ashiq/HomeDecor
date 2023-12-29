import React, { useEffect } from 'react'
import { ImageBackground, StatusBar, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import { start } from '../assets'
import TextStyles from '../styles/TextStyles'
import PrimaryButton from '../components/buttons/PrimaryButton'

const GettingStarted = ({ navigation }) => {

    StatusBar.setBackgroundColor("transparent")

    return (
        <ImageBackground
            source={start} // Replace with your image path
            style={Styles.flex1}
        >
            <View
                style={Styles.mainView}
            >

                <Text
                    style={[
                        TextStyles.bold,
                        TextStyles.heading1,
                        TextStyles.primaryText,
                        TextStyles.gelasio
                    ]}
                >
                    HOME DECOR
                </Text>
                <Text
                    style={[
                        TextStyles.regular,
                        TextStyles.heading3,
                        TextStyles.descriptionText,
                        TextStyles.nunito,
                        Styles.description
                    ]}
                >
                    The best simple place where you discover most wonderful furnitures and make your home beautiful.
                </Text>
                <PrimaryButton
                    title={"Get Started"}
                    styles={[
                        Styles.button
                    ]}
                    textStyles={[
                        TextStyles.heading3,
                        TextStyles.gelasio,
                    ]}
                    onPress={() => navigation.navigate("SignUp")}
                />
            </View>
        </ImageBackground>
    )
}

export default GettingStarted



const Styles = StyleSheet.create({
    flex1: {
        flex: 1,
        // height: "120%"
    },
    mainView: {
        flex: 1,
        justifyContent: "center",
        // position: "absolute",
        alignItems: 'start',
        width: '100%',
        padding: 30,
        gap: 40,
        top: "10%",

    },
    description: {
        textAlign: 'justify',
        lineHeight: 35,
        width: '85%'
    },
    button: {
        marginTop: "35%",
        paddingVertical: 14,
        width: "50%",
        alignSelf: 'center',
        elevation: 10,
    }
})