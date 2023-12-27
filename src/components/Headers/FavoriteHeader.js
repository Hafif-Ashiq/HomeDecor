import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import TextStyles from '../../styles/TextStyles'
import { CartIcon } from '../icons'
import { MyCart } from '../../Pages'

const FavoriteHeader = ({navigation}) => {
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
                    Favorites
                </Text>
            </View>
            <TouchableOpacity activeOpacity={0.8} onPress={()=> navigation.navigate('MyCart')}>
                <CartIcon  small={true} primary={true}/>
            </TouchableOpacity>
        </View>
    )
}

export default FavoriteHeader


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