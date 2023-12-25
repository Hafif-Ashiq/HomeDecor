import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { View, Text, Alert } from "react-native"
import { Button, TextInput } from 'react-native-paper'
import MainLayout from './src/layouts/MainLayout'

import SignIn from './src/Pages/SignIn'

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <View style={{flex:1}}>
      <MainLayout />
    </View>
  )
}

export default App
