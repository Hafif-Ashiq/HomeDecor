import React, { useEffect, useState } from 'react'
import { Text, View, Image, StyleSheet, Alert, ScrollView, TouchableOpacity } from 'react-native'
import { PrimaryButton, SaveButton } from '../components/buttons'
import Counter from '../counter/Counter'
import TextStyles from '../styles/TextStyles'
import { Back, Rating } from '../components/icons'
import { useFocusEffect, useRoute } from '@react-navigation/native'
import { firebase } from '@react-native-firebase/firestore'
import AsyncStorage from '@react-native-async-storage/async-storage'
import addToCart from '../Firebase/AddToCart'

const Product = ({ navigation }) => {

  const route = useRoute()
  const receivedData = route.params?.productData || {}

  const [quantity, setQuantity] = useState(1)
  // const [userId, setuserId] = useState(1)
  // const [tabFocus, setTabFocus] = useState(true)

  // useFocusEffect(
  //   React.useCallback(() => {
  //     setTabFocus(!tabFocus)
  //   }, [])
  // );




  useEffect(() => {
    console.log(receivedData);

    async function getId() {
      const user_id = await getuserID()
      console.log("In use effect ==>" + user_id);
    }
    getId()
  }, [])

  const getuserID = async () => {
    const user_id = await AsyncStorage.getItem("user_id")
    // setuserId(user_id)
    console.log("User ID Set == " + user_id);

    return user_id
  }

  const addToFavorites = async () => {

    const db = firebase.firestore()
    // const userId = await AsyncStorage.getItem("user_id")
    // setuserId(userId)
    console.log(receivedData.id);

    const user_id = await getuserID()

    db.collection('users').doc(user_id)
      .get().then((res) => {
        console.log(res);
      }).catch(e => console.error(e))

    db.collection('users').doc(user_id).update({
      favorites: firebase.firestore.FieldValue.arrayUnion(receivedData.id)
    }).then(result => {
      console.log(result);
      console.log("Product Added to Favorites");
    }).catch(e => console.log(e))
  }


  const toCart = async () => {
    const user_id = await getuserID()
    await addToCart(receivedData.id, quantity, user_id)
    navigation.navigate("MyCart")
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.imageView}>
        {/* Image */}
        <Image style={styles.image} source={{ uri: receivedData.images[0] }} />
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => { navigation.goBack() }}
          style={styles.backButton}
        >
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
            {receivedData.name}
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
              Rs. {receivedData.price}
            </Text>
            <Counter
              count={quantity}
              onPlus={() => setQuantity(quantity + 1)}
              onMinus={() => setQuantity(quantity - 1)}
              minusDisabled={quantity > 1 ? false : true}
              plusDisabled={quantity < receivedData.quantity ? false : true}
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
              {receivedData.rating}
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
            {receivedData.description}
          </Text>

        </View>
        <View style={styles.buttonView}>
          {/* Buttons */}
          <SaveButton onPress={addToFavorites} />
          <PrimaryButton
            title={"Add To Cart"}
            styles={[styles.addToCartButton]}
            textStyles={[
              styles.addToCartText
            ]}
            onPress={toCart}
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