import React, { useEffect, useState } from 'react'
import { Alert, StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native-paper'
import TextStyles from '../../styles/TextStyles'
import InputField from '../Global/InputField'

const Inputs = ({ edit = true, label, value, onChange, isPassword = false }) => {
    return (
        <View >
            {edit ?
                <InputField
                    label={label}
                    value={value}
                    onChange={onChange}
                    isPassword={isPassword}
                />
                :
                <View
                    style={styles.mainView}
                >
                    <Text
                        style={[
                            TextStyles.descriptionText,
                            TextStyles.textSize1,
                            TextStyles.regular,
                            TextStyles.nunito
                        ]}
                    >
                        {label}
                    </Text>
                    <Text
                        style={[
                            TextStyles.primaryText2,
                            TextStyles.headerHeading,
                            TextStyles.semiBold,
                            TextStyles.nunito
                        ]}
                    >
                        {value}
                    </Text>
                </View>
            }
        </View>
    )
}

export default Inputs


const styles = StyleSheet.create({
    mainView: {
        paddingVertical: 12,
        paddingHorizontal: 16,
        elevation: 10,
        backgroundColor: 'white'
    }
})