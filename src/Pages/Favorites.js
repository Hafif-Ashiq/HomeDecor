import React, { useEffect, useState } from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  FlatList,
  Image,
} from 'react-native';

import { CrossIcon, ShoppingBag } from '../components/icons';
import TextStyles from '../styles/TextStyles';
import { PrimaryButton } from '../components/buttons';
import { firebase } from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

const Favorites = ({ navigation }) => {
  const [loading, setIsLoading] = useState(false);
  const [productsArray, setProductsArray] = useState([]);
  const [userId, setUserId] = useState("")
  const [tabFocus, setTabFocus] = useState(false)

  useFocusEffect(
    React.useCallback(() => {
      setTabFocus(!tabFocus)
    }, [])
  );




  useEffect(() => {

    const getProducts = async () => {
      const user_id = await AsyncStorage.getItem("user_id")
      setUserId(user_id)
      // getFavoriteItems()
      const favProducts = []
      const db = firebase.firestore()


      db.collection('users').doc(user_id).get().then(userRef => {
        const data = userRef.data()


        const promises = data?.favorites?.map(async (item) => {
          const allFavs = await db.collection("products").doc(item).get();
          const productData = allFavs["_data"]
          productData["id"] = item // Accessing data using .data()
          return productData;
        });

        Promise.all(promises)
          .then((results) => {

            favProducts.push(...results);
            setProductsArray(favProducts)
          })
          .catch((error) => {
            console.error('Error fetching products:', error);
          });

      })
    }
    getProducts()
    setIsLoading(true)
  }, [tabFocus, productsArray])



  const removeFavorite = async (itemId) => {

    firebase
      .firestore()
      .collection("users")
      .doc(userId)
      .update({
        favorites: firebase.firestore.FieldValue.arrayRemove(itemId)
      })
      .then(() => {
        console.log("deleted from favs");
      })
      .catch(e => console.error(e))

    const products = productsArray.filter(item => item !== itemId)

    setProductsArray(products)

  }




  return (
    <View style={styles.container}>
      {
        loading ? <FlatList
          data={productsArray}
          renderItem={({ item }) => {
            return (
              <View style={styles.productItem}>
                <Image source={{ uri: item.images[0] }} style={styles.productImage} />
                <View style={styles.prodDescript}>
                  <Text style={[TextStyles.secondaryText,
                  TextStyles.nunito,
                  TextStyles.semiBold,
                  TextStyles.textSize1]}>{item.name} </Text>
                  <Text style={[TextStyles.primaryText,
                  TextStyles.nunito,
                  TextStyles.bold,
                  TextStyles.headerHeading]}>Rs. {item.price}</Text>
                </View>
                <View style={styles.iconContainer}>
                  <TouchableOpacity
                    style={styles.crossIcon}
                    activeOpacity={0.8}
                    onPress={() => removeFavorite(item.id)}
                  >
                    <CrossIcon />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.shoppingBag} activeOpacity={0.8}>
                    <ShoppingBag fillColor={'black'} />
                  </TouchableOpacity>
                </View>
                {/* Render other details of the product */}
              </View>
            );
          }}
          keyExtractor={item => item.id} // Assuming title can be used as a unique key
        /> : <></>
      }
      <View style={styles.buttonContainer}>
        <PrimaryButton
          title={'Add all to my cart'}
          styles={[styles.button]}
          textStyles={[
            TextStyles.semiBold,
            TextStyles.heading3,
            TextStyles.nunito,
          ]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  productItem: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#E1E1E1',
  },
  productImage: {
    width: 100, // Set the width and height as needed
    height: 100,
    resizeMode: 'cover', // You can adjust the resizeMode based on your design
    borderRadius: 10,
    marginRight: '6%'
  },
  prodDescript: {
    justifyContent: 'space-evenly',
    paddingTop: 5,

  },
  shoppingBag: {
    backgroundColor: "#60606040",
    padding: 5,
    borderRadius: 6
  },
  crossIcon: {
    backgroundColor: "white",
    padding: 3,
    borderRadius: 6
  },

  button: {
    // marginTop: '15%',
    paddingVertical: 14,
    width: '50%',
    alignSelf: 'center',
    width: '92%',
    elevation: 5,
  },
  iconContainer: {
    justifyContent: 'space-between',
  }
});

export default Favorites;
