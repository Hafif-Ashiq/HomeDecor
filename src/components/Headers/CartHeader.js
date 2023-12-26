import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import TextStyles from '../../styles/TextStyles'
import { Back } from '../icons'

const CartHeader = ({navigation}) => {
    return (
        <View style={styles.mainView}>
            <TouchableOpacity activeOpacity={0.9} onPress={() => { navigation.goBack() }} style={styles.backButton}>
                <Back />
            </TouchableOpacity>
            <View style={styles.textContainer}>
                <Text
                    style={[
                        TextStyles.bold,
                        TextStyles.headerHeading,
                        TextStyles.merriweather,
                        styles.text,
                        TextStyles.primaryText
                    ]}
                >
                    My Cart
                </Text>
            </View>
        </View>
    )
}

export default CartHeader


const styles = StyleSheet.create({
    mainView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 15
    },
    text: {
        lineHeight: 50,
        textAlign: "center",
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center', // Center vertically
      },
      backButton: {
        position: 'absolute',
        backgroundColor: 'white',
        top: 19,
        left: 30,
        padding: 10,
        borderRadius: 6,
        elevation: 5
      }
})