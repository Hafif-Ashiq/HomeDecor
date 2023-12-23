import React from 'react'
import { Dimensions, ImageBackground, StyleSheet, View } from 'react-native'
import { Text, Button } from 'react-native-paper'
import { start } from '../assets'
import TextStyles from '../styles/TextStyles'
import PrimaryButton from '../components/PrimaryButton'

// const {height} = Dimensions.get('window')

// const translateYValue = -(height * 0.5);

const GettingStarted = ({ navigation }) => {
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
                    The best simple place where you discover most wonderful furnitures and make your home beautiful
                </Text>
                {/* <Button  style={Styles.button} mode='contained' buttonColor='#303030' onPress={() => navigation.navigate("Home")}>Get Started</Button> */}
                <PrimaryButton
                    title={"Get Started"}
                    outlined
                    styles={[
                        Styles.button
                    ]}
                    textStyles={[
                        TextStyles.semiBold,
                        TextStyles.heading3,
                        TextStyles.gelasio
                    ]}
                    onPress={() => navigation.navigate("Home")}
                />
            </View>
        </ImageBackground>
    )
}

export default GettingStarted



const Styles = StyleSheet.create({
    flex1: {
        flex: 1
    },
    mainView: {
        flex: 1,
        justifyContent: "center",
        // position: "absolute",
        alignItems: 'start',
        width: '85%',
        padding: 30,
        gap: 40,
        top: "10%"
    },
    description: {
        textAlign: 'justify',
        lineHeight: 35,
    },
    button: {
        marginTop: "35%",
        paddingVertical: 14,
        width:"50%",
        alignSelf:'center'
    }
})