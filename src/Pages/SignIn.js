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
import {useState} from 'react';
import Eye from '../components/icons/Eye';

const SignIn = ({navigation}) => {

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [secured, setSecured] = useState(true);

  const toggleVisibility = () => {
    setSecured(!secured);
  };

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
          value={email}
          onChangeText={(text)=>setEmail(text)}
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
        <View style={Styles.passwordContainer}>
          <TextInput
            style={[
              Styles.textInput,
              TextStyles.textSize1,
              TextStyles.nunito,
              TextStyles.descriptionText,
            ]}
            value={password}
          onChangeText={(text)=>setPassword(text)}
            underlineColorAndroid="transparent"
            placeholder="Enter password"
            secureTextEntry={secured}></TextInput>
          <TouchableOpacity
            onPress={toggleVisibility}
            style={Styles.eyeIconContainer}>
            <Eye style={Styles.eyeIcon} />
          </TouchableOpacity>
        </View>
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
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={[TextStyles.nunito, TextStyles.heading3, Styles.SignUp]}>
            Sign Up
          </Text>
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
    borderColor: MyColors.secondaryButton, // Set the color of the underline
    paddingHorizontal: 8,
    marginBottom: 5,
    backgroundColor: 'white',
    marginTop: 20,
    marginBottom: 20,
    flex: 1,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  eyeIconContainer: {
    position: 'absolute',
    right: 0,
  },
  eyeIcon: {
    width: 20, // Set the width and height as needed
    height: 20,
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
