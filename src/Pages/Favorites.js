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
import { CrossIcon, ShoppingBag } from '../components/icons';
import TextStyles from '../styles/TextStyles';
import { Button } from 'react-native-paper';
import {PrimaryButton} from '../components/buttons';

const Favorites = ({navigation}) => {
  const [active, setActive] = useState(0);
  const [productsArray, setProductsArray] = useState([]);

  const products = [
    {
      title: 'Black Simple Chair 1',
      price: 12000,
      image:
        'https://images.unsplash.com/photo-1581539250439-c96689b516dd?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      is_chair: true,
    },
    {
      title: 'Black Simple Table 2',
      price: 12000,
      image:
        'https://images.unsplash.com/photo-1581539250439-c96689b516dd?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      is_table: true,
    },
    {
      title: 'Black Simple Lamp 3',
      price: 12000,
      image:
        'https://images.unsplash.com/photo-1581539250439-c96689b516dd?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      is_lamp: true,
    },
    {
      title: 'Black Simple Bed 4',
      price: 12000,
      image:
        'https://images.unsplash.com/photo-1581539250439-c96689b516dd?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      is_bed: true,
    },
    {
      title: 'Black Simple Bed 5',
      price: 12000,
      image:
        'https://images.unsplash.com/photo-1581539250439-c96689b516dd?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      is_bed: true,
    },
    {
      title: 'Black Simple ArmChair 6',
      price: 12000,
      image:
        'https://images.unsplash.com/photo-1581539250439-c96689b516dd?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      is_armchair: true,
    },
    {
      title: 'Black Simple Chair 7',
      price: 12000,
      image:
        'https://images.unsplash.com/photo-1581539250439-c96689b516dd?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      is_chair: true,
    },
    {
      title: 'Black Simple Chair 8',
      price: 12000,
      image:
        'https://images.unsplash.com/photo-1581539250439-c96689b516dd?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      is_chair: true,
    },
    {
      title: 'Black Simple Table 9',
      price: 12000,
      image:
        'https://images.unsplash.com/photo-1581539250439-c96689b516dd?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      is_table: true,
    },
  ];

  return (
    <View style={styles.container}>
    <FlatList
      data={products}
      renderItem={({item}) => {
        return (
          <View style={styles.productItem}>
            <Image source={{uri: item.image}} style={styles.productImage} />
            <View style={styles.prodDescript}>
              <Text style={[TextStyles.secondaryText,
            TextStyles.nunito,
            TextStyles.semiBold,
            TextStyles.textSize1]}>{item.title}</Text>
              <Text style={[TextStyles.primaryText,
            TextStyles.nunito,
            TextStyles.bold,
            TextStyles.headerHeading]}>Rs. {item.price}</Text>
            </View>
            <View style={styles.iconContainer}>
            <TouchableOpacity style={styles.crossIcon} activeOpacity={0.8}>
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
      keyExtractor={item => item.title} // Assuming title can be used as a unique key
    />
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
    marginRight:'6%'
  },
  prodDescript:{
    justifyContent:'space-evenly',
    paddingTop:5,

  },
  shoppingBag:{
    backgroundColor:"#60606040",
    padding:5,
    borderRadius:6
},
crossIcon:{
    backgroundColor:"white",
    padding:3,
    borderRadius:6
},

button: {
    // marginTop: '15%',
    paddingVertical: 14,
    width: '50%',
    alignSelf: 'center',
    width: '92%',
  },
iconContainer:{
    justifyContent:'space-between',
}
});

export default Favorites;
