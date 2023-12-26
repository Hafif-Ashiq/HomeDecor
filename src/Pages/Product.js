import React, { useState } from 'react'
import { Text, View, Image, StyleSheet, Alert, ScrollView, TouchableOpacity } from 'react-native'
import { PrimaryButton, SaveButton } from '../components/buttons'
import Counter from '../counter/Counter'
import TextStyles from '../styles/TextStyles'
import { Back, Rating } from '../components/icons'

const Product = ({navigation}) => {

  const [quantity, setQuantity] = useState(1)



  return (
    <View style={{ flex: 1 }}>
      <View style={styles.imageView}>
        {/* Image */}
        <Image style={styles.image} source={require("../assets/chair.jpg")} />
        <TouchableOpacity activeOpacity={0.9} onPress={()=>{navigation.navigate("HomeLayout")}} style={styles.backButton}>
          <Back />
        </TouchableOpacity>
      </View>
      <View style={styles.informationView}>
        <View style={styles.centerView}>
          {/* Description */}
          <Text
            style={[
              TextStyles.heading2,
              TextStyles.gelasio,
              TextStyles.medium,
              TextStyles.primaryText
            ]}
          >
            Black Chair
          </Text>

          <View style={styles.priceQuantityView}>
            <Text
              style={[
                TextStyles.heading1,
                TextStyles.bold,
                TextStyles.nunito,
                TextStyles.primaryText
              ]}
            >
              Rs. 25,000
            </Text>
            <Counter
              count={quantity}
              onPlus={() => setQuantity(quantity + 1)}
              onMinus={() => setQuantity(quantity - 1)}
              plusDisabled={false}
              minusDisabled={quantity > 1 ? false : true}
            />

          </View>
          <View style={styles.ratingView}>
            <Rating />
            <Text
              style={[
                TextStyles.heading3,
                TextStyles.nunito,
                TextStyles.bold,
                TextStyles.primaryText
              ]}
            >
              4.5
            </Text>
          </View>

          <Text
            style={[
              TextStyles.textSize1,
              TextStyles.nunito,
              TextStyles.headerHeading,
              TextStyles.secondaryText,
              TextStyles.justifyText,

            ]}
          >
            Minimal Stand is made of by natural wood. The design that is very simple and minimal. This is truly one of the best furnitures in any family for now. With 3 different colors, you can easily select the best match for your home.
          </Text>

        </View>
        <View style={styles.buttonView}>
          {/* Buttons */}
          <SaveButton onPress={() => Alert.alert('saved')} />
          <PrimaryButton
            title={"Add To Cart"}
            styles={[styles.addToCartButton]}
            textStyles={[
              styles.addToCartText
            ]}
            onPress={()=>{}}
          />
        </View>
      </View>
    </View>
  )
}

export default Product


const styles = StyleSheet.create({
  informationView: {
    flex: 1,
    paddingHorizontal: 25,
    marginTop: 25,
    marginBottom: 30,
    justifyContent: 'space-between'
  },
  imageView: {
    height: "56%",
    objectFit: "cover",
    justifyContent: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    overflow: 'hidden',
    position: 'relative'
  },
  image:
  {
    width: "auto",
    height: "100%",
  },
  centerView: {
    gap: 10
  },
  priceQuantityView: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  ratingView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 10
  },

  addToCartButton: {
    paddingVertical: 16,
    flex: 1,
    elevation: 10
  },
  addToCartText: {
    fontSize: 20
  },
  buttonView: {
    flexDirection: 'row',
    gap: 15
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