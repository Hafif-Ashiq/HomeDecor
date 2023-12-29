import React, { useEffect, useState } from 'react'
import { Alert, ScrollView, StyleSheet, View } from 'react-native'
import Heading from '../components/Settings/Heading'
import Inputs from '../components/Settings/Inputs'
import { PrimaryButton } from '../components/buttons'
import TextStyles from '../styles/TextStyles'
import { HelpTile } from '../components/Settings'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { firebase } from '@react-native-firebase/auth'
import { mockNotifications, mockProducts } from '../Models'
import { useRoute } from '@react-navigation/native'

const Settings = () => {

    const route = useRoute()

    const info = route.params?.info || { name: "", email: "" }
    const [personalEdit, setPersonalEdit] = useState(false)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [passwordEdit, setPasswordEdit] = useState(false)
    const [password, setPassword] = useState("123455678")
    const [passwordLabel, setPasswordLabel] = useState("*")
    const [newPassword, setNewPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")




    useEffect(() => {
        const length = password.length
        setPasswordLabel("*".repeat(length))
    }, [password])


    useEffect(() => {
        setName(info.name)
        setEmail(info.email)
    }, [])




    const uploadAllProducts = async () => {

        mockProducts.forEach((item, index) => {
            firebase
                .firestore()
                .collection('products')
                .doc()
                .set(item)
                .then(response => console.log("Added item" + index))
                .catch(e => console.error(e))
        })

    }

    const getuserID = async () => {
        const user_id = await AsyncStorage.getItem("user_id")
        // setuserId(user_id)
        // console.log("User ID Set == " + user_id);

        return user_id
    }

    const uploadAllNotifications = async () => {

        const user_id = await getuserID()

        mockNotifications.forEach((item, index) => {
            firebase
                .firestore()
                .collection('users')
                .doc(user_id)
                .collection("notifications")
                .doc()
                .set(item)
                .then(response => {
                    console.log("Added Notifications" + index)
                    console.log(response)
                })
                .catch(e => console.error(e))
        })
    }

    const updateName = async () => {
        const userId = await getuserID()

        firebase.firestore().collection("users").doc(userId).update({
            name: name
        }).then(res => {
            console.log("Name Updated");
        })

        setPersonalEdit(false)
    }

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
                    {personalEdit ? <PrimaryButton
                        title={"Save"}
                        styles={[styles.saveButton]}
                        textStyles={[
                            TextStyles.headerHeading
                        ]}
                        onPress={updateName}
                    /> : <></>}
                    <Inputs
                        label={"Email"}
                        value={email}
                        edit={false}
                        onChange={setEmail}
                    />

                </View>
                <View style={styles.subViews}>
                    <Heading
                        title={"Password"}

                    />
                    <Inputs
                        label={passwordEdit ? "Old Password" : "Password"}
                        value={passwordEdit ? password : passwordLabel}
                        edit={passwordEdit}
                        onChange={setPassword}
                        isPassword

                    />
                    {passwordEdit ? <>
                        <Inputs
                            label={"New Password"}
                            value={newPassword}
                            edit={true}
                            onChange={setNewPassword}
                            isPassword
                        />
                        <Inputs
                            label={"Password"}
                            value={confirmPassword}
                            edit={true}
                            onChange={setConfirmPassword}
                            isPassword
                        />
                        <PrimaryButton
                            title={"Save"}
                            styles={[styles.saveButton]}
                            textStyles={[
                                TextStyles.headerHeading
                            ]}
                            onPress={() => setPasswordEdit(false)}
                        />
                    </> : <></>}
                </View>
                <View style={styles.subViews}>
                    <Heading title={"Help Center"} />
                    {/* <Text>{name}</Text> */}
                    <HelpTile title={"FAQs"} onPress={uploadAllNotifications} />
                    <HelpTile title={"Contact Us"} />
                    <HelpTile title={"Privacy & Terms"} />
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