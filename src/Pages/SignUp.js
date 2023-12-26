import React from 'react';
import {
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Text, TextInput} from 'react-native-paper';
import TextStyles from '../styles/TextStyles';
import {PrimaryButton} from '../components/buttons';
import MyColors from '../styles/MyColors';

const SignUp = ({navigation}) => {
  return (
    <View style={Styles.mainView}>
      <Text
        style={[
          TextStyles.bold,
          TextStyles.heading1,
          TextStyles.merriweather,
          Styles.welcomeText,
        ]}>
        WELCOME
      </Text>
      <View style={Styles.inputView}>
        <Text
          style={[
            TextStyles.nunito,
            TextStyles.descriptionText,
            TextStyles.textSize1,
          ]}>
          Name
        </Text>
        <TextInput
          style={[
            Styles.textInput,
            TextStyles.textSize1,
            TextStyles.nunito,
            TextStyles.descriptionText,
          ]}
          underlineColorAndroid="transparent"
          placeholder="Enter name"></TextInput>
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
        <Text
          style={[
            TextStyles.nunito,
            TextStyles.descriptionText,
            TextStyles.textSize1,
          ]}>
          Confirm Password
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
          title={'Sign Up'}
          styles={[Styles.button]}
          textStyles={[
            TextStyles.semiBold,
            TextStyles.heading3,
            TextStyles.nunito,
          ]}
          onPress={() => navigation.navigate('HomeLayout')}
        />
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignSelf: 'center',
            marginTop: 20,
          }}>
          <Text
            style={[
              TextStyles.nunito,
              TextStyles.semiBold,
              TextStyles.textSize1,
              TextStyles.descriptionText,
            ]}>
            Already have account?
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SignIn');
            }}>
            <Text
              style={[
                TextStyles.nunito,
                TextStyles.textSize1,
                TextStyles.bold,
              ]}>
              SIGN IN
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignUp;

const Styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
  welcomeText: {
    padding: 20,
    marginTop: 70,
  },
  inputView: {
    elevation: 10,
    padding: 30,
    marginRight: 20,
    height: '75%',
    backgroundColor: 'white',
  },
  textInput: {
    height: 40,
    borderBottomWidth: 1, // Set the thickness of the underline
    borderColor: MyColors.secondaryButton, // Set the color of the underline
    paddingHorizontal: 8,
    marginBottom: 2,
    backgroundColor: 'white',
    marginTop: 5,
    marginBottom: 20,
  },
  button: {
    marginTop: '5%',
    paddingVertical: 14,
    width: '50%',
    alignSelf: 'center',
    width: '80%',
  }
});
