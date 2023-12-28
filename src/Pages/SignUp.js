import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { Text } from 'react-native-paper';
import TextStyles from '../styles/TextStyles';
import { PrimaryButton } from '../components/buttons';
import MyColors from '../styles/MyColors';
import { useState } from 'react';
import AuthInput from '../components/Global/AuthInput';
import auth, { firebase } from "@react-native-firebase/auth"
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignUp = ({ navigation }) => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPass, setConfirm] = useState('')
  const [secured, setSecured] = useState(true);
  const [confirmSecured, setConfirmSecured] = useState(true)



  const handleSignUp = async () => {
    console.log("signup");
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {

        const newUser = userCredentials.user

        const user = {
          name: name,
          profile_pic: null,
          cart: [],
          orders: [],
          favorites: [],
          notifications: []
        }

        firestore().collection('users').doc(newUser.uid).set(user).then(res => {
          console.log("User added");
        });

        try {
          AsyncStorage.setItem("user_id", newUser.uid)
            .then(response => console.log("User ID saved"))
        }
        catch (e) {
          console.log(e)
        }

        console.log('User account created');
        navigation.navigate('HomeLayout')
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          Alert.alert('That email address is invalid!');
        }

        console.log(error.message)
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
        <View>
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
        </View>



        <View style={Styles.buttonsView}>
          <PrimaryButton
            title={'Sign Up'}
            styles={[Styles.button]}
            textStyles={[
              TextStyles.semiBold,
              TextStyles.heading3,
              TextStyles.nunito,
            ]}
            onPress={handleSignUp}
          />
          <View
            style={{
              // flex: 1,
              flexDirection: 'row',
              alignSelf: 'center',
              // marginTop: 20,
              // backgroundColor: "red"
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
    </View>
  );
};

export default SignUp;

const Styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'center'
  },
  welcomeText: {
    padding: 20,
    marginTop: 50,
  },
  inputView: {
    elevation: 10,
    padding: 30,
    marginRight: 20,
    height: '70%',
    backgroundColor: 'white',
    gap: 40
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
  buttonsView: {
    gap: 15,
    marginBottom: 20,
    // backgroundColor: 'red'
  }
});
