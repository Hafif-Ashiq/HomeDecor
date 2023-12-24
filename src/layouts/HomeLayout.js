import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import React from 'react'
import { View } from 'react-native'
import { Home } from '../Pages'



const HomeTab = createMaterialBottomTabNavigator()

const HomeLayout = () => {
  return (
    <HomeTab.Navigator>
        <HomeTab.Screen name='Home' component={Home} options={{tabBarIcon: <></>}} />
        <HomeTab.Screen name='Favorites' component={Home} />
        <HomeTab.Screen name='Notifications' component={Home} />
        <HomeTab.Screen name='Profile' component={Home} />
    </HomeTab.Navigator>
  )
}

export default HomeLayout