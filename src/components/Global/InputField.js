import React, { useState } from 'react'
import { TextInput } from 'react-native-paper'
import TextStyles from '../../styles/TextStyles'
import { Alert, StyleSheet, View } from 'react-native'
import MyColors from '../../styles/MyColors'
import { Picker } from '@react-native-picker/picker'

const InputField = ({ inputStyles = [], placeholder = "", disabled = false, value, onChange, label, isPassword = false, isNumber = false, disabledPickerItem = "", isPicker = false, pickerOptions = [], maxLength = 100 }) => {



    return (
        <View>
            {isPicker ?

                <View style={[styles.picker]}>
                    <Picker
                        style={[
                            { width: "100%" },
                            TextStyles.primaryText2,
                            TextStyles.headerHeading,
                            TextStyles.nunito,
                            TextStyles.semiBold,
                        ]}
                        itemStyle={[
                            TextStyles.primaryText2,
                            TextStyles.headerHeading,
                            TextStyles.nunito,
                            TextStyles.semiBold,
                        ]}
                        // mode='dropdown'
                        dropdownIconColor={disabled ? MyColors.textDisabled : MyColors.borderColor}
                        selectedValue={value}
                        onValueChange={onChange}

                    >
                        <Picker.Item color={MyColors.textDisabled} label={disabledPickerItem} value="java" enabled={false} />
                        {pickerOptions.map((item, index) => (
                            <Picker.Item label={item} value={item} key={index} />
                        ))}
                    </Picker>
                </View>
                :
                <TextInput
                    label={label}
                    mode='outlined'
                    style={[
                        TextStyles.primaryText2,
                        TextStyles.headerHeading,
                        TextStyles.nunito,
                        TextStyles.semiBold,
                        // disabled ? styles.disabled : styles.enabled,
                        styles.input,
                        ...inputStyles
                    ]}
                    placeholder={placeholder}
                    disabled={disabled}
                    selectionColor={disabled ? MyColors.disabledField : MyColors.primaryButton}
                    cursorColor={disabled ? MyColors.disabledField : MyColors.primaryButton}
                    activeOutlineColor={disabled ? MyColors.disabledField : MyColors.primaryButton}
                    outlineColor={disabled ? MyColors.disabledField : MyColors.borderColor}
                    keyboardType={isNumber ? "numeric" : "default"}
                    value={value}
                    onChangeText={onChange}
                    secureTextEntry={isPassword ? true : false}
                    maxLength={maxLength}
                />

            }

        </View>
    )
}

export default InputField


const styles = StyleSheet.create({
    input: {
        backgroundColor: "white",
        borderRadius: 4,
        paddingTop: 15,
        paddingBottom: 10,
        // elevation: 1
    },
    enabled: {
        borderWidth: 1,
        borderColor: MyColors.borderColor,

    },
    disabled: {
        backgroundColor: MyColors.disabledField
    },
    picker: {
        borderColor: MyColors.borderColor,
        borderWidth: 1,
        paddingTop: 10,
        paddingBottom: 10,
    }
})