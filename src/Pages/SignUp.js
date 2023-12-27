import React from 'react';
import {
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { Text, TextInput } from 'react-native-paper';
import TextStyles from '../styles/TextStyles';
import { PrimaryButton } from '../components/buttons';
import MyColors from '../styles/MyColors';
import { useState } from 'react';
import Eye from '../components/icons/Eye';
import AuthInput from '../components/Global/AuthInput';

const SignUp = ({ navigation }) => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPass, setConfirm] = useState('')
  const [secured, setSecured] = useState(true);
  const [confirmSecured, setConfirmSecured] = useState(true)



  const handleSignUp = async () => {
    auth()
      .createUserWithEmailAndPassword('jane.doe@example.com', 'SuperSecretPassword!')
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          Alert.alert('That email address is invalid!');
        }

        Alert.alert(error);
      });
  }

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
        <AuthInput
          label={"Name"}
          value={name}
          onChange={setName}
        />

        <AuthInput
          label={"Email"}
          value={email}
          onChange={setEmail}
        />
        <AuthInput
          label={"Password"}
          value={password}
          onChange={setPassword}
          isPassword={true}
          secured={secured}
          toggleShowPassword={() => setSecured(!secured)}
        />
        <AuthInput
          label={"Confirm Password"}
          value={confirmPass}
          onChange={setConfirm}
          isPassword={true}
          secured={confirmSecured}
          toggleShowPassword={() => setConfirmSecured(!confirmSecured)}
        />



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
    flex: 1
  },
  button: {
    marginTop: '5%',
    paddingVertical: 14,
    width: '50%',
    alignSelf: 'center',
    width: '80%',
  },
  eyeIconContainer: {
    position: 'absolute',
    right: 0,
  },
  eyeIcon: {
    width: 20, // Set the width and height as needed
    height: 20,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
