import React, { useEffect, useState } from 'react';
import {
  Text,

  StyleSheet,

  View,

} from 'react-native';

import {
  MasterCard,
  Dhl,
} from '../components/icons';
import TextStyles from '../styles/TextStyles';
import { PrimaryButton } from '../components/buttons';
import { Heading } from '../components/Settings';
import MyColors from '../styles/MyColors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { firebase } from '@react-native-firebase/firestore';

const CheckOut = ({ navigation }) => {
  const [name, setName] = useState('');
  const [address, setAdress] = useState('');
  const [payment, setPayment] = useState("");


  const [price, setPrice] = useState("")


  useEffect(() => {
    const getInfo = async () => {
      const shippingInfo = JSON.parse(await AsyncStorage.getItem("shipping_info"))
      const paymentInfo = JSON.parse(await AsyncStorage.getItem("payment_info"))
      const total = JSON.parse(await AsyncStorage.getItem("order_price"))

      setName(shippingInfo.name)
      setAdress(shippingInfo.address)
      setPayment(paymentInfo.cardNumber)
      setPrice(total)

    }
    getInfo()
  }, [])

  const getuserID = async () => {
    const user_id = await AsyncStorage.getItem("user_id")
    // setuserId(user_id)
    console.log("User ID Set == " + user_id);

    return user_id
  }


  const submitOrder = async () => {
    const db = firebase.firestore().collection("users").doc(userId)
    const userId = await getuserID()
    const documents = []
    db.collection("cart").get()
      .then(res => {
        res.forEach((doc) => {
          documents.push({ id: doc.id, ...doc.data() });
        })
        console.log(documents);
      })

    // Get total Quantity
    const quantity = 0
    documents.forEach(doc => {
      quantity += doc.quantity
    })

    // Delete cart Items

    const promises = documents.map(async (item) => {
      await db.collection("cart").doc(item.id).delete()
    })

    Promise
      .all(promises)
      .then(response => {
        console.log(response)
        navigation.navigate("Success")
      })



  }

  return (
    <View style={styles.container}>


      <View style={styles.textBox}>
        <Heading
          title={"Shipping Address"}
          editable
          onEdit={() => { navigation.navigate("Shipping") }}
        />

        <View style={styles.addressView}>
          <Text
            style={[
              {
                backgroundColor: 'white',
                borderTopStartRadius: 8,
                borderColor: 'white',
                borderWidth: 0.5,
                elevation: 2,
                padding: 15,
              },
              TextStyles.nunito,
              TextStyles.bold,
              TextStyles.heading3,
              TextStyles.primaryText,
            ]}>
            {name}
          </Text>
          <Text
            style={[
              {
                backgroundColor: 'white',
                borderBottomEndRadius: 8,
                borderColor: 'white',
                marginTop: 4,
                height: 70,
                elevation: 2,
                padding: 15,
              },
              TextStyles.nunito,
              TextStyles.textSize1,
            ]}>
            {address}
          </Text>
        </View>
      </View>

      <View style={styles.textBox}>

        <Heading
          title={"Payment"}
          editable
          onEdit={() => { navigation.navigate("Payment") }}
        />

        <View style={styles.cardView}>
          <MasterCard faded={true} />
          <Text
            style={[
              styles.cardInput,
              TextStyles.semiBold,
              TextStyles.nunito,
              TextStyles.textSize1,
              TextStyles.primaryText,
            ]}>
            **** **** **** {payment.slice(-4)}
          </Text>
        </View>
      </View>


      <View style={styles.textBox}>

        <Heading title={"Delivery Method"} />

        <View style={styles.cardView}>
          <Dhl />
          <Text
            style={[
              styles.cardInput,
              TextStyles.bold,
              TextStyles.primaryText,
              TextStyles.textSize1,
              TextStyles.nunito,
            ]}>
            Fast (2-3days)
          </Text>
        </View>
      </View>
      {/* </>} */}
      <View style={styles.submitView}>
        <View style={styles.totalView}>
          <View style={styles.view2}>
            <Text
              style={[
                TextStyles.descriptionText,
                TextStyles.heading3,
                TextStyles.medium,
                TextStyles.nunito,
              ]}>
              Order
            </Text>
            <Text
              style={[
                TextStyles.nunito,
                TextStyles.primaryText,
                TextStyles.heading3,
                TextStyles.semiBold,
              ]}>
              Rs. {price}
            </Text>
          </View>
          <View style={styles.view2}>
            <Text
              style={[
                TextStyles.descriptionText,
                TextStyles.heading3,
                TextStyles.medium,
                TextStyles.nunito,
              ]}>
              Delivery:
            </Text>
            <Text
              style={[
                TextStyles.nunito,
                TextStyles.primaryText,
                TextStyles.heading3,
                TextStyles.semiBold,
              ]}>
              Rs. 500
            </Text>
          </View>
          <View style={styles.view2}>
            <Text
              style={[
                TextStyles.descriptionText,
                TextStyles.heading3,
                TextStyles.medium,
                TextStyles.nunito,
              ]}>
              Total:
            </Text>
            <Text
              style={[
                TextStyles.nunito,
                TextStyles.primaryText,
                TextStyles.heading3,
                TextStyles.bold,
              ]}>
              Rs. {price + 500}
            </Text>
          </View>
        </View>
        <PrimaryButton
          title={'SUBMIT ORDER'}
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
    marginTop: 10,
    gap: 10,
    paddingHorizontal: 20,
  },
  textBox: {
    gap: 10,
    padding: 5,
    marginTop: 6,
  },
  cardView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 6,
    marginBottom: 4,
    backgroundColor: 'white',
    elevation: 2,
    padding: 15,
    borderRadius: 8,
    paddingLeft: 20,
    borderColor: 'white'
  },
  cardInput: {
    flex: 1,
    backgroundColor: 'white',
    borderWidth: 0,
    borderBottomWidth: 0,
    marginLeft: 15,
  },
  totalView: {
    elevation: 2,
    padding: 5,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    borderRadius: 8,
    marginTop: 15,
    marginBottom: 5,
  },
  view2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
  },
  button: {
    paddingVertical: 14,
    width: '50%',
    alignSelf: 'center',
    width: '100%',
    elevation: 10
  },
  submitView: {
    position: 'absolute',
    bottom: 30,
    width: "100%",
    alignSelf: 'center',
    justifyContent: 'center',
    gap: 5
  }
});

export default CheckOut;
