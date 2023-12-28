import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,

} from 'react-native';
import { Text, TextInput } from 'react-native-paper';
import TextStyles from '../styles/TextStyles';
import { PrimaryButton } from '../components/buttons';
import { useState } from 'react';
import AuthInput from '../components/Global/AuthInput';
import auth from "@react-native-firebase/auth"
import AsyncStorage from '@react-native-async-storage/async-storage';


const SignIn = ({ navigation }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secured, setSecured] = useState(true);


  const handleSignIn = async () => {
    console.log("in Signin");
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        console.log('User signed in:', user)
        navigation.navigate('HomeLayout')

        try {
          const idRes = await AsyncStorage.setItem("user_id", user.uid)
          // console.warn(idRes);
          console.log("IID Saved");

        }
        catch (e) {
          console.log(e)
        }

      })
      .catch((error) => {
        // Handle sign-in errors
        console.error('Error signing in:', error);
        // Display error message or handle accordingly
      });
  }


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
        <View style={Styles.inputs}>
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
        </View>
        <View style={Styles.buttonsView}>
          <PrimaryButton
            title={'Sign In'}
            styles={[Styles.button]}
            textStyles={[
              TextStyles.semiBold,
              TextStyles.heading3,
              TextStyles.nunito,
            ]}
            onPress={handleSignIn}
          />
          <TouchableOpacity style={Styles.SignUpButton} onPress={() => navigation.navigate('SignUp')}>
            <Text style={[TextStyles.nunito, TextStyles.heading3, Styles.SignUp]}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignIn;

const Styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'center'
  },
  welcomeView: {
    padding: 30,
    marginTop: 50
  },
  inputView: {
    elevation: 10,
    paddingHorizontal: 30,
    paddingVertical: 40,
    marginRight: 20,
    height: '50%',
    backgroundColor: 'white',
    justifyContent: 'space-between'
  },
  inputs: {

  },
  buttonsView: {
    gap: 15,
    marginBottom: 20
  },

  button: {
    marginTop: '15%',
    paddingVertical: 14,
    width: '50%',
    alignSelf: 'center',
    width: '80%',
  },
  SignUp: {
    alignSelf: 'center',
    marginTop: '5%',
  },
});
