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
import {CrossIcon, ShoppingBag, Edit} from '../components/icons';
import TextStyles from '../styles/TextStyles';
import {Button, TextInput} from 'react-native-paper';
import {PrimaryButton} from '../components/buttons';

const CheckOut = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.textBox}>
        <Text style={[
            TextStyles.semiBold,
            TextStyles.labelText,
            TextStyles.nunito,
            TextStyles.heading3
        ]}>Shipping Address</Text>
        <TouchableOpacity>
          <Edit fillColor={'black'} />
        </TouchableOpacity>
      </View>

      <View style={styles.addressView}>
        <TextInput placeholder='Enter Name'/>
        <TextInput placeholder='Address'/>
      </View>
      <View style={styles.textBox}>
        <Text style={[
            TextStyles.semiBold,
            TextStyles.labelText,
            TextStyles.nunito,
            TextStyles.heading3
        ]}>Shipping Address</Text>
        <TouchableOpacity>
          <Edit fillColor={'black'} />
        </TouchableOpacity>
      </View>
      <View style={styles.cardView}>
        <Text>CardIcon</Text>
        <TextInput placeholder='**** **** **** 3947' style={styles.cardInput}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textBox:{
    flexDirection:'row',
    justifyContent:'space-between',
    margin:5,
    padding:5
  },
  cardView:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  cardInput:{
    flex:1
  }
});

export default CheckOut;
