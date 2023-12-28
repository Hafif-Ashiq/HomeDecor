import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import TextStyles from '../../styles/TextStyles'
import { CartIcon } from '../icons'
import { MyCart } from '../../Pages'

const NotificationHeader = ({navigation}) => {
    return (
        <View style={styles.mainView}>
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
                    Notifications
                </Text>
            </View>
        </View>
    )
}

export default NotificationHeader


const styles = StyleSheet.create({
    mainView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 15
    },
    text: {
        lineHeight: 25,
        textAlign: "center",
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center', // Center vertically
      },
})