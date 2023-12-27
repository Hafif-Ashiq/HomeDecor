import React, { useEffect, useState } from 'react'
import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native'
import Heading from '../components/Settings/Heading'
import Inputs from '../components/Settings/Inputs'
import { PrimaryButton } from '../components/buttons'
import TextStyles from '../styles/TextStyles'
import { HelpTile } from '../components/Settings'

const Settings = () => {

    const [personalEdit, setPersonalEdit] = useState(false)
    const [name, setName] = useState("Kim Mingyue")
    const [email, setEmail] = useState("minu_k@gmail.com")
    const [passwordEdit, setPasswordEdit] = useState(false)
    const [password, setPassword] = useState("abcde")
    const [passwordLabel, setPasswordLabel] = useState("*")

    useEffect(() => {
        const length = password.length
        setPasswordLabel("*".repeat(length))
    }, [password])

    return (
        <View style={styles.mainView}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.subViews}>
                    <Heading
                        title={"Personal Information"}
                        editable
                        onEdit={() => setPersonalEdit(true)}
                    />
                    <Inputs
                        label={"Name"}
                        value={name}
                        edit={personalEdit}
                        onChange={setName}
                    />
                    <Inputs
                        label={"Email"}
                        value={email}
                        edit={personalEdit}
                        onChange={setEmail}
                    />
                    {personalEdit ? <PrimaryButton
                        title={"Save"}
                        styles={[styles.saveButton]}
                        textStyles={[
                            TextStyles.headerHeading
                        ]}
                        onPress={() => setPersonalEdit(false)}
                    /> : <></>}
                </View>
                <View style={styles.subViews}>
                    <Heading
                        title={"Password"}
                        editable
                        onEdit={() => (setPasswordEdit(true))}
                    />
                    <Inputs
                        label={"Password"}
                        value={passwordEdit ? password : passwordLabel}
                        edit={passwordEdit}
                        onChange={setPassword}
                        isPassword
                    />
                    {passwordEdit ? <PrimaryButton
                        title={"Save"}
                        styles={[styles.saveButton]}
                        textStyles={[
                            TextStyles.headerHeading
                        ]}
                        onPress={() => setPasswordEdit(false)}
                    /> : <></>}
                </View>
                <View style={styles.subViews}>
                    <Heading title={"Help Center"} />
                    {/* <Text>{name}</Text> */}
                    <HelpTile />
                </View>
            </ScrollView>

        </View>
    )
}

export default Settings


const styles = StyleSheet.create({
    mainView: {
        // paddingHorizontal: 20,
        paddingTop: 20
    },
    scrollView: {

    },
    subViews: {
        gap: 15,
        marginHorizontal: 20,
        marginBottom: 40
    },
    saveButton: {
        paddingVertical: 12
    },

})