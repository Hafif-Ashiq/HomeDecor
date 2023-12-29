import React, { useEffect, useState } from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  FlatList,
  Image,
} from 'react-native';

import { CrossIcon, Forward } from '../components/icons';
import TextStyles from '../styles/TextStyles';
import { PrimaryButton } from '../components/buttons';
import Counter from '../counter/Counter';
import { TextInput } from 'react-native-paper';
import MyColors from '../styles/MyColors';
import { firebase } from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MyCart = ({ navigation }) => {
  const [productsArray, setProductsArray] = useState([]);
  const [quantityMap, setQuantityMap] = useState({});
  const [total, setTotal] = useState(0);
  const [userId, setuserId] = useState("")

  const [reload, setReload] = useState(1)

  const [loading, setLoading] = useState(true)


  useEffect(() => {
    setLoading(true)
    getCartItems()


  }, [])

  useEffect(() => {
    setLoading(true)
    getCartItems()

  }, [reload])

  const getCartItems = async () => {
    let documents = []
    const user_id = await getuserID()
    firebase.firestore().collection("users").doc(user_id).collection("cart").get().then(res => {
      res.forEach((doc) => {
        console.log(res);
        documents.push({ id: doc.id, ...doc.data() });
      })
      console.log(documents);

      documents = documents.filter((doc) => doc.id != "empty")
      const prods = []

      const promises = documents.map(async (item) => {
        const data = await firebase.firestore().collection("products").doc(item.id).get();
        const productData = data["_data"]
        productData["id"] = item.id
        productData['quantity'] = item.quantity // Accessing data using .data()
        return productData;
      });

      Promise.all(promises)
        .then((results) => {
          prods.push(...results);
          setProductsArray(prods)
          setLoading(false)
        })
        .catch((error) => {
          console.error('Error fetching products:', error);
        });

    })

  }

  const getuserID = async () => {
    const user_id = await AsyncStorage.getItem("user_id")
    setuserId(user_id)
    console.log("User ID Set == " + userId);
    return user_id
  }

  useEffect(() => {
    productsArray.forEach((product) => {
      setQuantityMap(prevQuantityMap => ({
        ...prevQuantityMap,
        [product.id]: product.quantity,
      }));
    })
  }, [productsArray])


  const updateQuantity = (productId, newQuantity) => {
    setQuantityMap(prevQuantityMap => ({
      ...prevQuantityMap,
      [productId]: newQuantity,
    }));
    setProductsArray(prevProductsArray =>
      prevProductsArray.map(product =>
        product.id === productId
          ? { ...product, quantity: newQuantity }
          : product,
      ),
    );
  };

  // Not Working
  const calculateTotal = () => {
    let newTotal = 0;
    for (const product of productsArray) {
      newTotal += product.price * (quantityMap[product.id] || 1);
    }
    setTotal(newTotal);
  };

  useEffect(() => {
    calculateTotal();
  }, [quantityMap, productsArray]);


  const removeFromCart = async (id) => {
    const user = await getuserID()

    firebase.firestore().collection('users').doc(user).collection('cart').doc(id).delete().then(res => {
      console.log("Deleted Cart item");
      let prds = productsArray
      prds = prds.filter(product => product.id != id)
      setProductsArray(prds)
      setReload(reload + 1)
    }).catch(e => console.error(e))
  }

  const submitOrder = async () => {
    try {
      await AsyncStorage.setItem("order_price", total.toString())
      navigation.navigate('Shipping')
    }
    catch (e) {
      console.error('Error saving Order Price');
    }
  }

  return (
    <View style={styles.container}>
      {
        loading ? <View style={{ flex: 1 }}></View> : <FlatList
          data={productsArray}
          renderItem={({ item }) => {
            const quantity = quantityMap[item.id];

            return (
              <View style={styles.productItem}>
                <Image source={{ uri: item.images[0] }} style={styles.productImage} />
                <View style={{ justifyContent: 'space-between', flex: 1 }}>
                  <View style={styles.prodDescript}>
                    <Text
                      style={[
                        TextStyles.secondaryText,
                        TextStyles.nunito,
                        TextStyles.semiBold,
                        TextStyles.textSize1,
                      ]}>
                      {item.name}
                    </Text>
                    <Text
                      style={[
                        TextStyles.primaryText,
                        TextStyles.nunito,
                        TextStyles.bold,
                        TextStyles.headerHeading,
                      ]}>
                      Rs. {item.price}
                    </Text>
                  </View>
                  <View style={{ width: 100 }}>
                    <Counter
                      count={quantity}
                      onPlus={() => updateQuantity(item.id, quantity + 1)}
                      onMinus={() =>
                        updateQuantity(item.id, Math.max(1, quantity - 1))
                      }
                      plusDisabled={false}
                      minusDisabled={quantity > 1 ? false : true}
                    />
                  </View>
                </View>
                <View style={styles.iconContainer}>
                  <TouchableOpacity
                    style={styles.crossIcon}
                    activeOpacity={0.8}
                    onPress={() => removeFromCart(item.id)}
                  >
                    <CrossIcon />
                  </TouchableOpacity>
                </View>
                {/* Render other details of the product */}
              </View>
            );
          }}
          keyExtractor={item => item.id}
        />
      }
      <View style={styles.buttonContainer}>
        <View style={styles.promoView}>
          <TextInput
            underlineColor="white"
            style={styles.promo}
            placeholder="Enter promo code"
            activeUnderlineColor='transparent'
          />
          <Forward />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 15,
            alignItems: 'center',
          }}>
          <Text
            style={[
              TextStyles.descriptionText,
              TextStyles.profileHeading,
              TextStyles.nunito,
              TextStyles.bold,
            ]}>
            Total:
          </Text>
          <Text
            style={[
              TextStyles.bold,
              TextStyles.primaryText,
              TextStyles.profileHeading,
              TextStyles.nunito,
            ]}>
            Rs. {total}
          </Text>
        </View>
        <PrimaryButton
          title={'Check out'}
          styles={[styles.button]}
          textStyles={[
            TextStyles.semiBold,
            TextStyles.profileHeading,
            TextStyles.nunito,
          ]}
          onPress={submitOrder}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  promoView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 2,
    backgroundColor: 'white',
    paddingHorizontal: 5,
    borderRadius: 4
  },
  promo: {
    backgroundColor: 'white',
    paddingHorizontal: 8,
    flex: 1,
    borderColor: MyColors.secondaryButton,
  },
  productItem: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#E1E1E1',
  },
  productImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 10,
    marginRight: '6%',
  },
  prodDescript: {
    justifyContent: 'flex-start',
    paddingTop: 5,
    flex: 1,
  },
  shoppingBag: {
    backgroundColor: '#60606040',
    padding: 5,
    borderRadius: 6,
  },
  crossIcon: {
    backgroundColor: 'white',
    padding: 3,
    borderRadius: 6,
  },
  button: {
    paddingVertical: 14,
    width: '50%',
    alignSelf: 'center',
    width: '92%',
  },
  iconContainer: {
    justifyContent: 'space-between',
  },
  buttonContainer: {
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: '#E1E1E1',
  },
});

export default MyCart;
