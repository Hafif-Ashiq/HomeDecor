import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Minus from './Minus'
import Plus from './Plus'
import TextStyles from '../styles/TextStyles'


const Counter = ({ onPlus, onMinus, count, plusDisabled = false, minusDisabled = false }) => {
  return (
    <View style={styles.mainView}>
      <Minus
        disabled={minusDisabled}
        onPress={onMinus}
      />
      <Text
        style={[
          TextStyles.heading3,
          TextStyles.semiBold,
          TextStyles.nunito,
          TextStyles.primaryText2
        ]}
      >
        {count}
      </Text>
      <Plus
        onPress={onPlus}
        disabled={plusDisabled}
      />
    </View>
  )
}

export default Counter


const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap:15
  }
})