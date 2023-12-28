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

    const [name,setName] = useState('');
    const [address,setAdress] = useState('');
    const [payment,setPayment] = useState();
    const [delivery,setDelivery] = useState('');
    const [editShipping,setEditShipping] =useState(false);
    const [editPayment,setEditPayment] =useState(false);
    const [editDelivery,setEditDelivery] =useState(false);

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
        <TouchableOpacity onPress={() => setEditShipping(!editShipping)}>
          <Edit fillColor={editShipping} />
        </TouchableOpacity>
      </View>

      <View style={styles.addressView}>
        <TextInput
          underlineColor="white"
          placeholder="Enter Name"
          value={name}
          disabled = {!editShipping}
          onChangeText={(text)=>setName(text)}
          style={{
            backgroundColor: 'white',
            borderTopStartRadius: 4,
            borderColor: MyColors.borderColor,
            borderWidth: 0.5,
            elevation:2
          }}
        />
        <TextInput
          underlineColor="white"
          placeholder="Address"
          value={address}
          disabled = {!editShipping}
          onChangeText={(text)=>setAdress(text)}
          style={{
            backgroundColor: 'white',
            borderBottomEndRadius: 4,
            borderColor: MyColors.borderColor,
            marginTop: 2,
            height: 70,
            borderWidth: 0.5,
            elevation:2
          }}
        />
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
        <TouchableOpacity onPress={()=>{setEditPayment(!editPayment)}}>
          <Edit fillColor={editPayment} />
        </TouchableOpacity>
      </View>
      <View style={styles.cardView}>
        <MasterCard faded={true} />
        <TextInput
            underlineColor="white"
          placeholder="**** **** **** 3947"
          value={payment}
          onChangeText={(text)=> setPayment(text)}
          disabled = {!editPayment}
          style={styles.cardInput}
        />
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
        <TouchableOpacity onPress={()=>{setEditDelivery(!editDelivery)}}>
          <Edit fillColor={editDelivery}/>
        </TouchableOpacity>
      </View>
      <View style={styles.cardView}>
        <Dhl />
        <TextInput
          placeholder="Fast (2-3days)"
          value={delivery}
          onChangeText={(text)=>{setDelivery}}
          disabled={!editDelivery}
          style={styles.cardInput}
          underlineColor="white"
        />
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
    padding: 3,
    borderRadius: 4,
  },
  cardInput: {
    flex: 1,
    backgroundColor: 'white',
    borderWidth: 0,
    borderBottomWidth: 0,
  },
  totalView: {
    elevation: 2,
    padding: 5,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    borderRadius: 4,
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
    width: '95%',
  },
});

export default CheckOut;
