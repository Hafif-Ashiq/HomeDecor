import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import TextStyles from '../../styles/TextStyles'
import { CartIcon } from '../icons'

const HomeHeader = () => {
    return (
        <View style={styles.mainView}>
            <View></View>
            <View>
                <Text
                    style={[
                        TextStyles.regular,
                        TextStyles.labelText,
                        TextStyles.heading3,
                        TextStyles.gelasio,
                        styles.text
                    ]}
                >
                    Make home
                </Text>
                <Text
                    style={[
                        TextStyles.bold,
                        TextStyles.primaryText2,
                        TextStyles.heading3,
                        TextStyles.gelasio,
                        styles.text
                    ]}
                >
                    BEAUTIFUL
                </Text>
            </View>
            <TouchableOpacity >
                <CartIcon />
            </TouchableOpacity>
        </View>
    )
}

export default HomeHeader


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
        textAlign: "center"
    }
})