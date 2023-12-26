import React from 'react';
import {View, ImageBackground, StyleSheet, TouchableOpacity} from 'react-native';
import {Text, TextInput} from 'react-native-paper';
import {start} from '../assets';
import TextStyles from '../styles/TextStyles';
import PrimaryButton from '../components/PrimaryButton';

const SignIn = () => {
  return (
    <View style={Styles.mainView}>
      <View style={Styles.welcomeView}>
        <Text
          style={[
            TextStyles.regular,
            TextStyles.heading1,
            TextStyles.descriptionText,
            TextStyles.merriweather,
          ]}>
          Hello !
        </Text>
        <Text
          style={[
            TextStyles.bold,
            TextStyles.heading2,
            TextStyles.merriweather,
          ]}>
          WELCOME BACK
        </Text>
      </View>
      <View style={Styles.inputView}>
        <Text
          style={[
            TextStyles.nunito,
            TextStyles.descriptionText,
            TextStyles.textSize1,
          ]}>
          Email
        </Text>
        <TextInput
          style={[
            Styles.textInput,
            TextStyles.textSize1,
            TextStyles.nunito,
            TextStyles.descriptionText,
          ]}
          underlineColorAndroid="transparent"
          placeholder="Enter email"></TextInput>
        <Text
          style={[
            TextStyles.nunito,
            TextStyles.descriptionText,
            TextStyles.textSize1,
          ]}>
          Password
        </Text>
        <TextInput
          style={[
            Styles.textInput,
            TextStyles.textSize1,
            TextStyles.nunito,
            TextStyles.descriptionText,
          ]}
          underlineColorAndroid="transparent"
          placeholder="Enter password"
          secureTextEntry={true}></TextInput>
        <PrimaryButton
          title={'Sign In'}
          styles={[Styles.button]}
          textStyles={[
            TextStyles.semiBold,
            TextStyles.heading3,
            TextStyles.nunito,
          ]}
          onPress={() => navigation.navigate('HomeLayout')}
        />
        <TouchableOpacity>
            <Text style={[
                TextStyles.nunito,
                TextStyles.heading3,
                Styles.SignUp

            ]}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignIn;

const Styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
  welcomeView: {
    padding: 30,
    marginTop: 80,
  },
  inputView: {
    elevation: 10,
    padding: 30,
    marginRight: 20,
    height: '60%',
    backgroundColor: 'white',
  },
  textInput: {
    height: 40,
    borderBottomWidth: 1, // Set the thickness of the underline
    borderColor: '#808080', // Set the color of the underline
    paddingHorizontal: 8,
    marginBottom: 5,
    backgroundColor: 'white',
    marginTop: 20,
    marginBottom: 20,
  },
  button: {
    marginTop: '15%',
    paddingVertical: 14,
    width: '50%',
    alignSelf: 'center',
    width: '80%',
  },
  SignUp:{
    alignSelf:"center",
    marginTop:'5%'
  }
});
