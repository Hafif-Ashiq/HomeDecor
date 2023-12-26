
import React from 'react'
import { Home, Profile } from '../Pages'
import { TabFavorites, TabHome, TabNotification, TabProfile } from '../components/tabIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Header, HomeHeader } from '../components/Headers';
import ProfileStackLayout from './ProfileStackLayout';



const HomeTab = createBottomTabNavigator()

const HomeLayout = () => {
  return (
    <HomeTab.Navigator
      initialRouteName='ProfileStack'
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 70,
          elevation: 70,
          backgroundColor: '#FFFFFF',
          
        },
      }}
    >
      <HomeTab.Screen
        name='Home'
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => <TabHome focused={focused} />,
          header: () => <HomeHeader />,
        }}

      />
      <HomeTab.Screen
        name='Favorites'
        component={Home}
        options={{ tabBarIcon: ({ focused }) => <TabFavorites focused={focused} /> }}
      />
      <HomeTab.Screen
        name='Notifications'
        component={Home}
        options={{ tabBarIcon: ({ focused }) => <TabNotification focused={focused} dot={false} /> }}
      />
      <HomeTab.Screen
        name='ProfileStack'
        component={ProfileStackLayout}
        options={{ 
          tabBarIcon: ({ focused }) => <TabProfile focused={focused} />, 
          headerShown:false
        }}
      />
      
    </HomeTab.Navigator>
  )
}

export default HomeLayout