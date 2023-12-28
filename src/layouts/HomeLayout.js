
import React from 'react'
import { Home, Profile, Favorites,Notifications } from '../Pages'
import { TabFavorites, TabHome, TabNotification, TabProfile } from '../components/tabIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Header, HomeHeader,FavoriteHeader,NotificationHeader } from '../components/Headers';
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
          header: (props) => <HomeHeader {...props}/>,
        }}

      />
      <HomeTab.Screen
        name='Favorites'
        component={Favorites}
        options={{ tabBarIcon: ({ focused }) => <TabFavorites focused={focused} />,
        header:(props)=> <FavoriteHeader {...props} />}}
      />
      <HomeTab.Screen
        name='Notifications'
        component={Notifications}
        options={{ tabBarIcon: ({ focused }) => <TabNotification focused={focused} dot={false} />,
        header: props => (
          <NotificationHeader {...props} />
        ) }}
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