import React, { useState } from 'react'
import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native'
import Heading from '../components/Settings/Heading'
import Inputs from '../components/Settings/Inputs'

const Settings = () => {

    const [personalEdit, setPersonalEdit] = useState(false)
    const [name, setName] = useState("Kim Mingyue")
    const [email, setEmail] = useState("minu_k@gmail.com")

    const [passwordEdit, setPasswordEdit] = useState(false)

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
                </View>
                <View style={styles.subViews}>
                    <Heading
                        title={"Password"}
                        editable
                        onEdit={() => (setPasswordEdit(true))}
                    />
                    <Inputs
                        label={"Name"}
                        value={name}
                        edit={passwordEdit}
                        onChange={setName}
                    />
                </View>
                <View style={styles.subViews}>
                    <Heading title={"Notifications"} />
                    {/* <Text>{name}</Text> */}
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
    }
})