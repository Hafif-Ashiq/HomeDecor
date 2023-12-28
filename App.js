import React from 'react'
import { View,} from "react-native"
import MainLayout from './src/layouts/MainLayout'
import { Favorites } from './src/Pages'

const App = () => {
  return (
    <View style={{flex:1, backgroundColor:'white'}}>
      <MainLayout />
      {/* <Favorites/> */}
    </View>
  )
}

export default App