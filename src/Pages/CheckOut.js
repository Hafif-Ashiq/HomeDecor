import React, {useEffect, useState} from 'react';
import {
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  FlatList,
  Image,
} from 'react-native';

import {ProductTile, Category} from '../components/Home';
import {
  CrossIcon,
  ShoppingBag,
  Edit,
  MasterCard,
  Dhl,
} from '../components/icons';
import TextStyles from '../styles/TextStyles';
import {Button, TextInput} from 'react-native-paper';
import {PrimaryButton} from '../components/buttons';
import MyColors from '../styles/MyColors';

const CheckOut = ({navigation}) => {
  const [name, setName] = useState('');
  const [address, setAdress] = useState('');
  const [payment, setPayment] = useState();
  const [delivery, setDelivery] = useState('');
  const [editShipping, setEditShipping] = useState(false);
  const [editPayment, setEditPayment] = useState(false);
  const [editDelivery, setEditDelivery] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.textBox}>
        <Text
          style={[
            TextStyles.semiBold,
            TextStyles.labelText,
            TextStyles.nunito,
            TextStyles.heading3,
          ]}>
          Shipping Address
        </Text>
        <TouchableOpacity onPress={() => {}}>
          <Edit fillColor={editShipping} />
        </TouchableOpacity>
      </View>

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
          Mingyu
        </Text>
        <Text
          style={[
            {
              backgroundColor: 'white',
              borderBottomEndRadius: 8,
              borderColor: 'white',
              marginTop: 4,
              height: 70,
              borderWidth: 0.5,
              elevation: 2,
              padding: 15,
            },
            TextStyles.nunito,
            TextStyles.textSize1,
          ]}>
          House#93, Street#50, F-11/3, Islamabad, Pakistan
        </Text>
      </View>
      <View style={styles.textBox}>
        <Text
          style={[
            TextStyles.semiBold,
            TextStyles.labelText,
            TextStyles.nunito,
            TextStyles.heading3,
          ]}>
          Payment
        </Text>
        <TouchableOpacity onPress={() => {}}>
          <Edit fillColor={editPayment} />
        </TouchableOpacity>
      </View>

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
          **** **** **** 3947
        </Text>
      </View>

      <View style={styles.textBox}>
        <Text
          style={[
            TextStyles.semiBold,
            TextStyles.labelText,
            TextStyles.nunito,
            TextStyles.heading3,
          ]}>
          Delivery Method
        </Text>
        <TouchableOpacity onPress={() => {}}>
          <Edit fillColor={editDelivery} />
        </TouchableOpacity>
      </View>
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
            Rs. 35000
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
            Rs. 35000
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
      />
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
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    borderRadius: 4,
    paddingLeft: 20,
  borderColor:'white'
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
    borderRadius: 4,
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
  },
});

export default CheckOut;
