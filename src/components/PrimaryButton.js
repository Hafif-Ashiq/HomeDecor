import React from 'react'
import {Text, StyleSheet,  TouchableOpacity } from 'react-native'
import { Button } from 'react-native-paper'
import MyColors from '../styles/MyColors'
import TextStyles from '../styles/TextStyles'


const PrimaryButton = ({ title, styles=[], textStyles=[], outlined=false, onPress }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={[Styles.button, ...styles]}
      onPress={onPress}
    >
      <Text style={[Styles.text, TextStyles.semiBold, ...textStyles]}>{title}</Text>
    </TouchableOpacity>
  )
}

export default PrimaryButton


const Styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    backgroundColor:MyColors.primaryButton
  },
  text:{
    color: MyColors.white,
    textAlign:'center'
  }
})