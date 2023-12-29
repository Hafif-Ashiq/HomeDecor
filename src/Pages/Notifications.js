import React, { useEffect, useState } from 'react';
import {
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  FlatList,
  Image,
} from 'react-native';

import { ProductTile, Category } from '../components/Home';
import { CrossIcon, New, ShoppingBag } from '../components/icons';
import TextStyles from '../styles/TextStyles';
import { Button } from 'react-native-paper';
import { PrimaryButton } from '../components/buttons';
import { wrap } from 'module';
import { useRoute } from '@react-navigation/native';
import { firebase } from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from '../components/Global/Loader';

const Notifications = ({ navigation }) => {
  const [loading, setIsLoading] = useState(true);
  const [notificationArray, setNotificationArray] = useState([]);
  const [userId, setUserId] = useState('');
  const [tabFocus, setTabFocus] = useState(false);
  const [confirmed, setConifrm] = useState(
    "https://images.unsplash.com/photo-1603899122361-e99b4f6fecf5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  const [cancelled, setCancel] = useState(
    'https://images.unsplash.com/photo-1593510987046-1f8fcfc512a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  );
  const [shipped, setShipped] = useState(
    'https://images.unsplash.com/photo-1656140129492-e834cce8309c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  );

  useEffect(() => {
    setIsLoading(true)
    const getNotifications = async () => {
      const user_id = await AsyncStorage.getItem('user_id');
      setUserId(user_id);
      // getNotifications
      let notificationsArr = [];
      firebase
        .firestore()
        .collection('users')
        .doc(user_id)
        .collection('notifications')
        .get()
        .then(res => {
          res.forEach(doc => {
            notificationsArr.push({ id: doc.id, ...doc.data() });
          });
          notificationsArr = notificationsArr.filter(item => item.id != "empty")
          setNotificationArray(notificationsArr);
          setIsLoading(false)


        });
    };
    getNotifications();
    setIsLoading(false);
  }, [tabFocus, notificationArray]);

  const sortedNotifications = [...notificationArray].sort((a, b) => {
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

  const getImage = (item) => {
    const type = item.type;

    if (type && typeof type === 'object') {
      if (type.shipped) {
        return shipped;
      } else if (type.cancelled) {
        return cancelled;
      }
    }
    // Default to confirmed
    return confirmed;
  };


  return (
    <View style={styles.container}>
      {
        loading ? <Loader /> :
          <FlatList
            data={sortedNotifications}
            renderItem={({ item }) => {
              return (
                <View style={styles.productItem}>
                  <Image source={{ uri: getImage(item) }} style={styles.productImage} />
                  <View style={styles.prodDescript}>
                    <Text
                      style={[
                        TextStyles.primaryText,
                        TextStyles.nunito,
                        TextStyles.bold,
                        TextStyles.textSize1,
                        { marginBottom: 7 },
                      ]}>
                      Your order #{item.id} has been  {item.type && typeof item.type === 'object' ? (
                        item.type.shipped ? (
                          'shipped'
                        ) : item.type.cancelled ? (
                          'cancelled'
                        ) : item.type.confirmed ? (
                          'confirmed'
                        ) : (
                          'processed'
                        )
                      ) : (
                        'processed'
                      )}
                    </Text>
                    <Text
                      style={[
                        TextStyles.nunito,
                        TextStyles.medium,
                        { fontSize: 10, lineHeight: 14 },
                        { marginBottom: 7 },
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
      }
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
    marginLeft: 6,
  },
  prodDescript: {
    marginRight: 86,
    justifyContent: 'flex-start',
  },
  iconContainer: {
    justifyContent: 'space-between',
  },
});

export default Notifications;
