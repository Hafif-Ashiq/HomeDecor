import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Button } from 'react-native-paper'
import MyColors from '../../styles/MyColors'
import TextStyles from '../../styles/TextStyles'


const SecBtn = ({ title, styles = [], textStyles = [], outlined = false, onPress }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={[
        Styles.button,
        outlined ? Styles.outlined : Styles.contained,
        ...styles
      ]}
      onPress={onPress}
    >
      <Text style={[
        Styles.text,
        TextStyles.semiBold,
        outlined ? Styles.outlinedText : Styles.containedText,
        ...textStyles
      ]}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

export default SecBtn


const Styles = StyleSheet.create({
  button: {
    borderRadius: 8,
  },
  text: {
    textAlign: 'center'
  },
  contained: {
   
  },
  outlined: {
    backgroundColor: 'transparent',
    borderColor: MyColors.primaryButton,
    borderWidth: 1
  },
  containedText: {
    color: MyColors.primaryButton,
  },
  outlinedText: {
    color: MyColors.primaryButton
  }
})