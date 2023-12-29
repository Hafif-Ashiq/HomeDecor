import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import TextStyles from '../styles/TextStyles'
import PageCard from '../components/Profile/PageCard'
import MyColors from '../styles/MyColors'
import { firebase } from '@react-native-firebase/firestore'
import AsyncStorage from '@react-native-async-storage/async-storage'
import auth from "@react-native-firebase/auth"
import { useFocusEffect } from '@react-navigation/native'
import { launchImageLibrary } from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';

const Profile = ({ navigation }) => {

    const [orders, setOrders] = useState(0)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [imageUri, setImageUri] = useState("")

    const [tabFocus, setTabFocus] = useState(true)

    useFocusEffect(
        React.useCallback(() => {
            setTabFocus(!tabFocus)
        }, [])
    );

    const getuserID = async () => {
        const user_id = await AsyncStorage.getItem("user_id")

        return user_id
    }

    useEffect(() => {
        console.log("In profile");

        const getUserCreds = async () => {
            userId = await getuserID()

            setEmail(auth().currentUser.email)
            firebase.firestore().collection('users').doc(userId).get()
                .then(response => {
                    const data = response["_data"]
                    setName(data["name"])
                }).catch(e => console.error(e))

        }
        getUserCreds()
        getOrders()

    }, [])

    const getOrders = async () => {
        const userId = await getuserID()
        firebase
            .firestore()
            .collection("users")
            .doc(userId)
            .collection("orders")
            .get()
            .then(res => {
                let array = []
                res.forEach((item) => array.push(item.id))
                const newArray = array.filter(item => item.id != "empty")
                console.log(newArray);
                setOrders(array.length)
            })

    }

    const goToSettings = () => {

        const dataToSend = {
            name: name,
            email: email,
        }

        navigation.navigate("Settings", { info: dataToSend })
    }

    const uploadPic = () => {
        console.log("Image upload");
        launchImageLibrary({
            // mediaTypes: MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1
        }, response => {
            if (!response.didCancel) {
                setImageUri(response.uri);
                uploadImage(response.uri); // Call the function to upload image to 
            }
        });
    }

    const uploadImage = async (uri) => {
        const userId = await getuserID()
        const storageRef = storage().ref();
        const imageName = `myImage.jpg`; // Define a unique name for your image
        const imageRef = storageRef.child(`images/${imageName}`);

        try {
            const response = await fetch(uri);
            const blob = await response.blob();

            await imageRef.put(blob);
            console.log('Image uploaded successfully');
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };

    return (
        <View style={styles.mainView}>
            <View style={styles.infoView}>
                <TouchableOpacity disabled onPress={uploadPic}>
                    <Image style={styles.image} source={require("../assets/person.jpg")} />
                </TouchableOpacity>
                <View style={styles.textView}>
                    <Text
                        style={[
                            TextStyles.centerText,
                            TextStyles.bold,
                            TextStyles.profileHeading,
                            TextStyles.primaryText,
                            TextStyles.nunito
                        ]}
                    >
                        {name}
                    </Text>
                    <Text
                        style={[
                            TextStyles.centerText,
                            TextStyles.regular,
                            TextStyles.nunito,
                            TextStyles.headerHeading,
                            TextStyles.descriptionText
                        ]}
                    >
                        {email}
                    </Text>
                </View>
            </View>
            <View style={styles.cardView}>
                <PageCard
                    heading={"My Orders"}
                    subText={`Already have ${orders} orders`}
                    onPress={() => navigation.navigate("Orders")}
                />
                <PageCard
                    heading={"Settings"}
                    subText={`Notification, Password, FAQ, Contact`}
                    onPress={goToSettings}
                />

            </View>
        </View>
    )
}

export default Profile


const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: MyColors.profileBackground,
        padding: 20
    },
    infoView: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: '50%',
        gap: 15,
        // backgroundColor: 'black'
    },
    image: {
        width: 180,
        height: 180,
        borderRadius: 500
    },
    textView: {
        justifyContent: 'center'
    },
    cardView: {
        height: '50%',
        justifyContent: "",
        alignItems: 'center',
        marginTop: 60,
        width: "100%",
        gap: 15
    }
})