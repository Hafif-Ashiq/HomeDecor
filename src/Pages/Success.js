import React, { useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import TextStyles from '../styles/TextStyles'
import PageCard from '../components/Profile/PageCard'
import MyColors from '../styles/MyColors'
import { SuccessPageIcon } from '../components/icons'
import { PrimaryButton, SecBtn } from '../components/buttons';

const Success = ({ navigation }) => {

  return (
    <View style={styles.mainView}>
      <Text
        style={[
          TextStyles.merriweather,
          TextStyles.primaryText,
          TextStyles.bold,
          {
            fontSize: 36,
            marginTop: 30
          }
        ]}>
        SUCCESS!
      </Text>
      <View style={styles.icon} >
        <SuccessPageIcon />
      </View>
      <Text style={[TextStyles.heading3,
      TextStyles.nunito, TextStyles.secondaryText, { marginTop: 20 }, { marginBottom: 5 }]}>Your order will be delivered soon.</Text>
      <Text style={[TextStyles.heading3,
      TextStyles.nunito, TextStyles.secondaryText, { marginBottom: 20 }]}>Thank you for choosing our app!</Text>

      <PrimaryButton
        title={'Track your orders'}
        styles={[styles.button]}
        textStyles={[
          TextStyles.semiBold,
          TextStyles.heading3,
          TextStyles.nunito,
        ]}
      // onPress={() => { navigation.navigate('Orders') }}
      />

      <PrimaryButton
        title={'BACK TO HOME'}
        outlined={true}
        styles={[styles.button1]}
        textStyles={[
          TextStyles.semiBold,
          TextStyles.heading3,
          TextStyles.nunito,
        ]}
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  )
}

export default Success


const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: MyColors.profileBackground,
    padding: 20,
    alignItems: 'center',
    margin: 23
  },
  icon: {
    margin: 30,
    elevation: 5
  },
  button: {
    paddingVertical: 14,
    width: '50%',
    alignSelf: 'center',
    width: '100%',
    elevation: 4,
    margin: 15
  },
  button1: {
    paddingVertical: 14,
    width: '50%',
    alignSelf: 'center',
    width: '100%',
    margin: 15
  },
})