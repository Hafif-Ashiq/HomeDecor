import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { TextInput } from 'react-native-paper'
import TextStyles from '../../styles/TextStyles'
import Eye from '../icons/Eye'
import MyColors from '../../styles/MyColors'

const AuthInput = ({ label, value, onChange, placeholder, isPassword, secured = false, toggleShowPassword, error = false }) => {
    return (
        <View >
            <Text
                style={[
                    TextStyles.nunito,
                    TextStyles.descriptionText,
                    TextStyles.textSize1,
                ]}>
                {label}
            </Text>
            <View style={Styles.inputContainer}>
                <TextInput
                    style={[
                        Styles.textInput,
                        TextStyles.textSize1,
                        TextStyles.nunito,
                        TextStyles.descriptionText,
                    ]}
                    value={value}
                    onChangeText={onChange}
                    underlineColorAndroid="transparent"
                    activeUnderlineColor={MyColors.primaryButton}
                    textColor={MyColors.primaryButton}
                    placeholder={placeholder}
                    secureTextEntry={secured}
                    error={error}
                />


                {isPassword ? <TouchableOpacity
                    onPress={toggleShowPassword}
                    style={Styles.eyeIconContainer}>
                    <Eye style={Styles.eyeIcon} />
                </TouchableOpacity> : <></>}
            </View>
        </View>
    )
}

export default AuthInput


const Styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
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
    inputView: {
        elevation: 10,
        padding: 30,
        marginRight: 20,
        height: '75%',
        backgroundColor: 'white',
    },
    eyeIconContainer: {
        position: 'absolute',
        right: 0,
    },

})