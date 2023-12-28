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
import {CrossIcon, New, ShoppingBag} from '../components/icons';
import TextStyles from '../styles/TextStyles';
import {Button} from 'react-native-paper';
import {PrimaryButton} from '../components/buttons';
import {wrap} from 'module';

const Notifications = ({navigation}) => {
  const [notificationArray, setNotificationArray] = useState([]);

  const notifications = [
    {
      id: '1',
      title: 'Black Simple Chair 1',
      type: 'shipped',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis pretium et in arcu adipiscing nec. Turpis pretium et in arcu adipiscing nec. ',
      image:
        'https://images.unsplash.com/photo-1581539250439-c96689b516dd?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      new: false,
      orderNumber: ' 123456789',
    },
    {
      id: '2',
      title: 'Black Simple Chair 1',
      type: 'shipped',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis pretium et in arcu adipiscing nec. Turpis pretium et in arcu adipiscing nec. ',
      image:
        'https://images.unsplash.com/photo-1581539250439-c96689b516dd?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      new: false,
      orderNumber: ' 123456789',
    },
    {
      id: '3',
      title: 'Black Simple Chair 1',
      type: 'confirmed',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis pretium et in arcu adipiscing nec. Turpis pretium et in arcu adipiscing nec. ',
      image:
        'https://images.unsplash.com/photo-1581539250439-c96689b516dd?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      new: false,
      orderNumber: ' 123456789',
    },
    {
      id: '4',
      title: 'Black Simple Chair 1',
      type: 'cancelled',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis pretium et in arcu adipiscing nec. Turpis pretium et in arcu adipiscing nec. ',
      image:
        'https://images.unsplash.com/photo-1581539250439-c96689b516dd?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      new: false,
      orderNumber: ' 123456789',
    },
    {
      id: '5',
      title: 'Black Simple Chair 1',
      type: 'shipped',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis pretium et in arcu adipiscing nec. Turpis pretium et in arcu adipiscing nec. ',
      image:
        'https://images.unsplash.com/photo-1581539250439-c96689b516dd?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      new: true,
      orderNumber: ' 123456789',
    },
    {
      id: '6',
      title: 'Black Simple Chair 1',
      type: 'shipped',
      description:
        'Lorem ipsum dolor sit amet, consecteturin arcu adipiscing nec. Turpis pretium et in arcu adipiscing nec. ',
      image:
        'https://images.unsplash.com/photo-1581539250439-c96689b516dd?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      new: true,
      orderNumber: ' 123456789',
    },
    {
        id: '7',
        title: 'Black Simple Chair 1',
        type: 'shipped',
        description:
          'Lorem ipsum dolor sit amet, consecteturin arcu adipiscing nec. Turpis pretium et in arcu adipiscing nec. ',
        image:
          'https://images.unsplash.com/photo-1581539250439-c96689b516dd?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        new: true,
        orderNumber: ' 123456789',
      },
      {
        id: '8',
        title: 'Black Simple Chair 1',
        type: 'shipped',
        description:
          'Lorem ipsum dolor sit amet, consecteturin arcu adipiscing nec. Turpis pretium et in arcu adipiscing nec. ',
        image:
          'https://images.unsplash.com/photo-1581539250439-c96689b516dd?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        new: true,
        orderNumber: ' 123456789',
      },
      {
        id: '9',
        title: 'Black Simple Chair 1',
        type: 'shipped',
        description:
          'Lorem ipsum dolor sit amet, consecteturin arcu adipiscing nec. Turpis pretium et in arcu adipiscing nec. ',
        image:
          'https://images.unsplash.com/photo-1581539250439-c96689b516dd?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        new: true,
        orderNumber: ' 123456789',
      },
  ];
  const sortedNotifications = [...notifications].sort((a, b) => {
    // Order 'new' notifications first
    if (a.new && !b.new) {
      return -1;
    } else if (!a.new && b.new) {
      return 1;
    } else {
      // If both are new or both are not new, maintain the original order
      return 0;
    }
  });

  return (
    <View style={styles.container}>
      <FlatList
        data={sortedNotifications}
        renderItem={({item}) => {
          return (
            <View style={styles.productItem}>
              <Image source={{uri: item.image}} style={styles.productImage} />
              <View style={styles.prodDescript}>
                <Text
                  style={[
                    TextStyles.primaryText,
                    TextStyles.nunito,
                    TextStyles.bold,
                    TextStyles.textSize1,{marginBottom:7}
                  ]}>
                  Your order #{item.orderNumber} has been {item.type}
                </Text>
                <Text
                  style={[
                    TextStyles.nunito,
                    TextStyles.medium,
                    {fontSize: 10, lineHeight: 14}, 
                    {marginBottom:7}
                  ]}
                  numberOfLines={3} // Set the desired number of lines
                  ellipsizeMode="tail" // Display an ellipsis (...) at the end if the text is truncated
                >
                  {item.description}
                </Text>
              </View>
            </View>
          );
        }}
        keyExtractor={item => item.id} // Assuming title can be used as a unique key
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  productItem: {
    padding: 10,
    flexDirection: 'row',
    backgroundColor: 'F5F5F5',
  },
  productImage: {
    width: 70, // Set the width and height as needed
    height: 70,
    resizeMode: 'cover', // You can adjust the resizeMode based on your design
    borderRadius: 10,
    marginRight: '4%',
    marginLeft:6
  },
  prodDescript: {
    marginRight:86,
    justifyContent:'flex-start'
  },
  iconContainer: {
    justifyContent: 'space-between',
  },
});

export default Notifications;
