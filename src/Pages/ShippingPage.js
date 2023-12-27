import React, { useEffect, useState } from 'react'
import { Alert, StyleSheet, View } from 'react-native'
import InputField from '../components/Global/InputField'
import { PrimaryButton } from '../components/buttons'
import TextStyles from '../styles/TextStyles'
// import geocoder from 'here-maps';

const hereAppKey = "pqAv7kMP0Klpz4snlObi"
const apiKey = "dva1LyQUZf_-eZqsSr87HgNa1RmpIU_P3IIIhkB5bPU"

const ShippingPage = () => {

    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [zipCode, setZipCode] = useState("")
    const [country, setCountry] = useState("")
    const [city, setCity] = useState("")
    const [district, setDistrict] = useState("")

    const [countryArray, setCountryArray] = useState([])
    const [cityArray, setCityArray] = useState([])
    const [districtArray, setDistrictArray] = useState([])

    useEffect(() => {
        const getCountries = async () => {

            fetch('https://restcountries.com/v3.1/all')
                .then((response) => response.json())
                .then((data) => {

                    const countryNames = data.map((country) => country.name.common);
                    countryNames = countryNames.sort()
                    setCountryArray(countryNames)
                })
        }
        getCountries()
    }, [])

    useEffect(() => {
        const getCities = async () => {


        }
        getCities()
    }, [country])

    return (
        <View style={styles.mainView}>
            <InputField
                label={"Full Name"}
                value={name}
                // disabled
                onChange={setName}
            />
            <InputField
                label={"Address"}
                value={address}
                onChange={setAddress}
            // value={value}
            // onChange={onChange}
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
                isPicker
                disabledPickerItem='Select City'
                value={city}
                onChange={setCity}
            // value={value}
            // onChange={onChange}
            />
            <InputField
                label={"District"}
                isPicker
                disabledPickerItem='Select District'
                value={district}
                onChange={setDistrict}
            // value={value}
            // onChange={onChange}
            />

            <PrimaryButton
                title={"Next"}
                styles={[
                    styles.button
                ]}
                textStyles={[
                    TextStyles.semiBold,
                    TextStyles.profileHeading,
                    TextStyles.nunito
                ]}

            />
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