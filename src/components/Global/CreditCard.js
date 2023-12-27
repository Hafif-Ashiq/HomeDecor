import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, ScrollView, StyleSheet, Text, View } from 'react-native'
import MyColors from '../../styles/MyColors'
import { MasterCard, Visa } from '../icons'
import TextStyles from '../../styles/TextStyles'
import { Defs, LinearGradient, Path, Stop, Svg } from 'react-native-svg'

const CreditCard = ({ text, name, expiry }) => {


    return (
        <View style={styles.mainView}>
            {/* Master Card + Visa */}


            <View style={styles.companies}>
                <MasterCard />
                <Visa />
            </View>
            <View>
                <Text style={[
                    styles.cardNumber,
                    TextStyles.nunito,
                    TextStyles.profileHeading,
                    TextStyles.regular,
                    TextStyles.whiteText
                ]}>
                    {text}
                </Text>
            </View>
            <View style={styles.cardInfo}>
                <View>
                    <Text
                        style={[
                            TextStyles.whiteText,
                            TextStyles.semiBold,
                            TextStyles.textSize2,
                            styles.lowOpacity,
                            TextStyles.nunito
                        ]}
                    >Card Holder Name</Text>
                    <Text
                        style={[
                            TextStyles.whiteText,
                            TextStyles.semiBold,
                            TextStyles.textSize1,
                            TextStyles.nunito
                        ]}
                    >
                        {name}
                    </Text>
                </View>
                <View>
                    <Text
                        style={[
                            TextStyles.whiteText,
                            TextStyles.semiBold,
                            TextStyles.textSize2,
                            styles.lowOpacity,
                            TextStyles.nunito
                        ]}
                    >Expiry Date</Text>
                    <Text
                        style={[
                            TextStyles.whiteText,
                            TextStyles.semiBold,
                            TextStyles.textSize1,
                            TextStyles.nunito
                        ]}
                    >{expiry}</Text>
                </View>
                <View style={styles.gradient}>
                    <Svg xmlns="http://www.w3.org/2000/svg" width="300" height="95" viewBox="0 0 280 95" fill="none">
                        <Path d="M58.8367 8C79.3071 4.97597 100.945 7.97409 117.133 11.5988C134.453 15.4769 151.853 19.5304 169.571 20.5726C202.275 22.4964 234.965 16.5818 264.922 3.32109L271.351 0.47522L279.604 94.6472H3.05176e-05L2.07471 78.8796C2.30954 77.0948 2.6174 75.3262 3.08337 73.5874C6.25449 61.7534 21.3984 13.5307 58.8367 8Z" fill="url(#paint0_linear_62_712)" fillOpacity="0.05" />
                        <Defs>
                            <LinearGradient id="paint0_linear_62_712" x1="171.354" y1="85.4242" x2="-14.5627" y2="-32.0481" gradientUnits="userSpaceOnUse">
                                <Stop stopColor="white" />
                                <Stop offset="1" stopColor="white" stopOpacity="0" />
                            </LinearGradient>
                        </Defs>
                    </Svg>
                </View>
            </View>

        </View>
    )
}

export default CreditCard


const styles = StyleSheet.create({
    mainView: {
        width: "98%",
        height: 200,
        backgroundColor: MyColors.primaryButton,
        borderRadius: 8,
        paddingVertical: 22,
        paddingHorizontal: 25,
        justifyContent: 'space-between',
        position: 'relative'
    },
    companies:
    {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15
    },
    cardNumber: {

        letterSpacing: 2
    },
    lowOpacity: {
        opacity: 0.8
    },
    cardInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    gradient: {
        position: 'absolute',
        bottom: -20,
        right: -40
    }
})