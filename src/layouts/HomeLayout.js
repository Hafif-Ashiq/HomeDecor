
import React from 'react'
import { Home } from '../Pages'
import { TabFavorites, TabHome, TabNotification, TabProfile } from '../components/tabIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeHeader } from '../components/Headers';
import { CartIcon } from '../components/icons';



// const HomeTab = createMaterialBottomTabNavigator()
const HomeTab = createBottomTabNavigator()

const HomeLayout = () => {
  return (
    <HomeTab.Navigator

      screenOptions={{
        tabBarShowLabel: false,
        // headerShown: false,
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
        name='Profile'
        component={Home}
        options={{ tabBarIcon: ({ focused }) => <TabProfile focused={focused} /> }}
      />
    </HomeTab.Navigator>
  )
}

export default HomeLayout