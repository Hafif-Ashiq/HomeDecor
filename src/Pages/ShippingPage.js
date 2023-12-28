import React, { useEffect, useState } from 'react'
import { Alert, StyleSheet, View } from 'react-native'
import InputField from '../components/Global/InputField'
import { PrimaryButton } from '../components/buttons'
import TextStyles from '../styles/TextStyles'
import AsyncStorage from '@react-native-async-storage/async-storage'


const ShippingPage = ({ navigation }) => {

    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [zipCode, setZipCode] = useState("")
    const [country, setCountry] = useState("")
    const [city, setCity] = useState("")
    const [district, setDistrict] = useState("")
    const [countryArray, setCountryArray] = useState([])

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)

        const getInfo = async () => {
            const data = await AsyncStorage.getItem("shipping_info")
            if (data) {
                const json = JSON.parse(data)

                // console.log(json);
                setAddress(json.address)
                setCity(json.city)
                setCountry(json.country)
                setDistrict(json.district)
                setName(json.name)
                setZipCode(json.zipCode)
            }
            setLoading(false)
        }

        const getCountries = async () => {

            fetch('https://restcountries.com/v2/all')
                .then((response) => response.json())
                .then((data) => {
                    let countryNames = data.map((country) => country.name);
                    countryNames = countryNames.sort()
                    setCountryArray(countryNames)
                })
        }
        getCountries()
        getInfo()




    }, [])

    const handleNext = async () => {
        const data = {
            name: name,
            address: address,
            zipCode: zipCode,
            country: country,
            city: city,
            district: district
        }

        try {
            await AsyncStorage.setItem("shipping_info", JSON.stringify(data))
            // Alert.alert("Added Shipping")
            navigation.navigate("Payment")
        }
        catch (e) {
            console.error("Error in Saving info");
        }
    }

    return (
        <View style={styles.mainView}>
            {!loading ? <>
                <InputField
                    label={"Full Name"}
                    value={name}
                    onChange={setName}
                />
                <InputField
                    label={"Address"}
                    value={address}
                    onChange={setAddress}
                />
                <InputField
                    label={"Zip Code (Postal Code)"}
                    isNumber
                    value={zipCode}
                    onChange={setZipCode}
                />
                <InputField
                    label={"Country"}
                    isPicker
                    disabledPickerItem='Select Country'
                    value={country}
                    onChange={setCountry}
                    pickerOptions={countryArray}
                />
                <InputField
                    label={"City"}
                    value={city}
                    onChange={setCity}
                />
                <InputField
                    label={"District"}
                    value={district}
                    onChange={setDistrict}
                />

                <PrimaryButton
                    title={"Next"}
                    onPress={handleNext}
                    styles={[
                        styles.button
                    ]}
                    textStyles={[
                        TextStyles.semiBold,
                        TextStyles.profileHeading,
                        TextStyles.nunito
                    ]}

                />
            </>
                : <></>
            }
        </View>
    )
}

export default ShippingPage



const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        marginTop: 30,
        gap: 20,
        paddingHorizontal: 20
    },
    button: {
        padding: 16,
        position: 'absolute',
        bottom: 20,
        width: "100%",
        alignSelf: 'center',
        elevation: 5
    }
})