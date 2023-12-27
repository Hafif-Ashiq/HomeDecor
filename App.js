import React from 'react'
import { View,} from "react-native"
import MainLayout from './src/layouts/MainLayout'
import { CheckOut } from './src/Pages'

const App = () => {
  return (
    <View style={{flex:1, backgroundColor:'white'}}>
      <MainLayout />
    </View>
  )
}

export default App