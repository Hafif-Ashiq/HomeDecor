import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import TextStyles from '../../styles/TextStyles'
import { ShoppingBag } from '../icons'
import MyColors from '../../styles/MyColors'

const ProductTile = ({ title, price, image, onAddToCart }) => {
    return (
        <View style={styles.mainView}>
            <View style={styles.imageView}>
                <Image style={styles.image} source={{ uri: image }}></Image>
                {/* source={{uri: image}} */}
                <TouchableOpacity onPress={onAddToCart} style={styles.shoppingBag} activeOpacity={0.8}>
                    <ShoppingBag />
                </TouchableOpacity>
            </View>
            <View style={styles.textView}>
                <Text style={[
                    TextStyles.textSize1,
                    TextStyles.regular,
                    TextStyles.nunito,
                    TextStyles.secondaryText
                ]}>
                    {title}
                </Text>
                <Text style={[
                    TextStyles.bold,
                    TextStyles.primaryText,
                    TextStyles.textSize1,
                    TextStyles.nunito
                ]}>Rs. {price}</Text>
            </View>
        </View>
    )
}

export default ProductTile


const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        gap: 10,
    },
    imageView: {
        width: "100%",
        height: 220,
        borderRadius: 10,
        overflow: 'hidden'
    },
    image: {
        objectFit: "cover",
        width: "100%",
        height: "100%"
    },
    textView: {
        gap: 5,
        flex: 1,
        // justifyContent: 'space-between'
    },
    shoppingBag: {
        backgroundColor: "#60606040",
        padding: 7,
        borderRadius: 6,
        position: "absolute",
        right: 10,
        bottom: 10,
    }
})