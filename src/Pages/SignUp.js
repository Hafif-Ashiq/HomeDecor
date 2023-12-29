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

  const [nameError, setNameError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [passError, setPassError] = useState(false)
  const [confirmPassError, setConfirmPassError] = useState(false)




  const handleSignUp = async () => {

    if (name == "") {
      setNameError(true)
      return
    }
    if (password.length < 8 || password == "") {
      setPassError(true)
      return
    }
    if (password != confirmPass || confirmPass == "") {
      setPassError(true)
      setConfirmPassError(true)
      return
    }

    if (email == "") {
      setEmailError(true)
      return
    }

    setNameError(true)
    setConfirmPassError(true)
    setPassError(true)
    setEmailError(true)

    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async (userCredentials) => {

        const newUser = userCredentials.user

        const user = {
          name: name,
          profile_pic: null,

          favorites: [],
          // notifications: []
        }

        const userDoc = firestore().collection('users').doc(newUser.uid)
        userDoc.set(user).then(userRef => {
          console.log("User added");

        }).catch(e => console.error("User Creation Error"))

        // userDoc.collection('orders').doc("empty").set({}).then(res => {
        //   console.log("Orders Collection created Successfully")
        // }).catch(e => console.error("Orders Creation Error"))

        // userDoc.collection('cart').doc("empty").set({}).then(res => {
        //   console.log("Cart Collection created Successfully")
        // }).catch(e => console.error("Cart Creation Error"))

        // userDoc.collection('notifications').doc("empty").set({}).then(res => {
        //   console.log("Notifications Collection created Successfully")
        // }).catch(e => console.error("Notifications Creation Error"))

        try {
          await AsyncStorage.setItem("user_id", newUser.uid)
            .then(response => console.log("User ID saved"))
        }
        catch (e) {
          console.log(e)
        }
        setName("")
        setConfirm("")
        setEmail("")
        setPassword("")
        console.log('User account created');
        navigation.navigate('HomeLayout')
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('That email address is already in use!');
          setEmailError(true)
        }

        if (error.code === 'auth/invalid-email') {
          setEmailError(true)
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
            error={nameError}
          />

          <AuthInput
            label={"Email"}
            value={email}
            onChange={setEmail}
            error={emailError}

          />
          <AuthInput
            label={"Password"}
            value={password}
            onChange={setPassword}
            isPassword={true}
            secured={secured}
            toggleShowPassword={() => setSecured(!secured)}
            error={passError}
          />
          <AuthInput
            label={"Confirm Password"}
            value={confirmPass}
            onChange={setConfirm}
            isPassword={true}
            secured={confirmSecured}
            toggleShowPassword={() => setConfirmSecured(!confirmSecured)}
            error={confirmPassError}
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
