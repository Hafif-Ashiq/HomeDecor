import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, TouchableOpacity, View, FlatList, Image } from 'react-native';

import { CrossIcon, Forward } from '../components/icons';
import TextStyles from '../styles/TextStyles';
import { PrimaryButton } from '../components/buttons';
import Counter from '../counter/Counter';
import { TextInput } from 'react-native-paper';
import MyColors from '../styles/MyColors';
import { CartHeader } from '../components/Headers';

const MyCart = ({ navigation }) => {
  const [productsArray, setProductsArray] = useState([]);
  const [quantityMap, setQuantityMap] = useState({});
  const [total,setTotal] = useState(0);

  const updateQuantity = (productId, newQuantity) => {
    setQuantityMap((prevQuantityMap) => ({
      ...prevQuantityMap,
      [productId]: newQuantity,
    }));
    setProductsArray((prevProductsArray) =>
    prevProductsArray.map((product) =>
      product.title === productId ? { ...product, quantity: newQuantity } : product
    ));
  };

  // Not Working 
  const calculateTotal = () => {
    let newTotal = 0;
    for (const product of productsArray) {
      newTotal += product.price * (quantityMap[product.title] || 1);
    }
    setTotal(newTotal);
  };

  useEffect(() => {
    // Calculate total whenever quantityMap or productsArray changes
    calculateTotal();
  }, [quantityMap, productsArray]);

  const products = [
    {
      title: 'Black Simple Chair 1',
      price: 12000,
      image:
        'https://images.unsplash.com/photo-1581539250439-c96689b516dd?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      is_chair: true,
      quantity : 1
    },
    {
      title: 'Black Simple Table 2',
      price: 12000,
      image:
        'https://images.unsplash.com/photo-1581539250439-c96689b516dd?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      is_table: true,
      quantity : 1
    },
    {
      title: 'Black Simple Lamp 3',
      price: 12000,
      image:
        'https://images.unsplash.com/photo-1581539250439-c96689b516dd?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      is_lamp: true,
      quantity : 1
    },
    {
      title: 'Black Simple Bed 4',
      price: 12000,
      image:
        'https://images.unsplash.com/photo-1581539250439-c96689b516dd?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      is_bed: true,
      quantity : 1
    },
    {
      title: 'Black Simple Bed 5',
      price: 12000,
      image:
        'https://images.unsplash.com/photo-1581539250439-c96689b516dd?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      is_bed: true,
      quantity : 1
    },
    {
      title: 'Black Simple ArmChair 6',
      price: 12000,
      image:
        'https://images.unsplash.com/photo-1581539250439-c96689b516dd?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      is_armchair: true,
      quantity : 1
    },
    {
      title: 'Black Simple Chair 7',
      price: 12000,
      image:
        'https://images.unsplash.com/photo-1581539250439-c96689b516dd?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      is_chair: true,
      quantity : 1
    },
    {
      title: 'Black Simple Chair 8',
      price: 12000,
      image:
        'https://images.unsplash.com/photo-1581539250439-c96689b516dd?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      is_chair: true,
      quantity : 1
    },
    {
      title: 'Black Simple Table 9',
      price: 12000,
      image:
        'https://images.unsplash.com/photo-1581539250439-c96689b516dd?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      is_table: true,
      quantity : 1
    },
  ];


  return (
    <View style={styles.container}>
        <CartHeader/>
      <FlatList
        data={products}
        renderItem={({ item }) => {
          const quantity = quantityMap[item.title] || 1;

          return (
            <View style={styles.productItem}>
              <Image source={{ uri: item.image }} style={styles.productImage} />
              <View style={styles.prodDescript}>
                <Text style={[TextStyles.secondaryText, TextStyles.nunito, TextStyles.semiBold, TextStyles.textSize1]}>
                  {item.title}
                </Text>
                <Text style={[TextStyles.primaryText, TextStyles.nunito, TextStyles.bold, TextStyles.headerHeading]}>
                  Rs. {item.price}
                </Text>
                <Counter
                  count={quantity}
                  onPlus={() => updateQuantity(item.title, quantity + 1)}
                  onMinus={() => updateQuantity(item.title, Math.max(1, quantity - 1))}
                  plusDisabled={false}
                  minusDisabled={quantity > 1 ? false : true}
                />
              </View>
              <View style={styles.iconContainer}>
                <TouchableOpacity style={styles.crossIcon} activeOpacity={0.8}>
                  <CrossIcon />
                </TouchableOpacity>
              </View>
              {/* Render other details of the product */}
            </View>
          );
        }}
        keyExtractor={(item) => item.title}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.promoView}>
            <TextInput 
            style={styles.promo}
            placeholder='Enter promo code' />
            <Forward/>
        </View>
        <View style={{flexDirection:'row',justifyContent:"space-between",padding:15,alignItems:"center"}}>
            <Text style={[
                TextStyles.descriptionText,
                TextStyles.profileHeading,
                TextStyles.nunito,
                TextStyles.bold
            ]}>Total:</Text>
            <Text style={[
                TextStyles.bold,
                TextStyles.primaryText,
                TextStyles.profileHeading,
                TextStyles.nunito
            ]}>Rs. {total}</Text>
        </View>
        <PrimaryButton
        title={'Check out'}
          styles={[styles.button]}
          textStyles={[
            TextStyles.semiBold,
            TextStyles.profileHeading,
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
  promoView:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  promo:{
    backgroundColor:'white',
    paddingHorizontal: 8,
    borderColor: MyColors.secondaryButton,
    flex:1
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
    justifyContent: 'space-evenly',
    paddingTop: 5,
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
