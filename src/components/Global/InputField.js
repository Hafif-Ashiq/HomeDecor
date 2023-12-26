import React, { useState } from 'react'
import { TextInput } from 'react-native-paper'
import TextStyles from '../../styles/TextStyles'
import { Alert, StyleSheet } from 'react-native'
import MyColors from '../../styles/MyColors'

const InputField = ({ inputStyles = [], disabled = false, value, onChange, label }) => {


    const handleChange = (event) => {
        // Alert.alert(event.target.value)
        // setValue(event.target.value)
        // onChange(event.target.value)
    }

    return (
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
            disabled={disabled}
            selectionColor={disabled ? MyColors.disabledField : MyColors.primaryButton}
            cursorColor={disabled ? MyColors.disabledField : MyColors.primaryButton}
            activeOutlineColor={disabled ? MyColors.disabledField : MyColors.primaryButton}
            outlineColor={disabled ? MyColors.disabledField : "#DBDBDB"}

            value={value}
            onChangeText={onChange}
        />
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
        borderColor: "#DBDBDB",

    },
    disabled: {
        backgroundColor: MyColors.disabledField
    }
})