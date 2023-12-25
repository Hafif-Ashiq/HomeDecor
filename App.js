import React from 'react'
import { View,} from "react-native"
import MainLayout from './src/layouts/MainLayout'


const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <View style={{flex:1, backgroundColor:'white'}}>
      <MainLayout />
    </View>
  )
}

export default App
