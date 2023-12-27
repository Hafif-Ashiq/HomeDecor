import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, ScrollView, StyleSheet, View } from 'react-native'
import CreditCard from '../components/Global/CreditCard'
import { PrimaryButton } from '../components/buttons'
import TextStyles from '../styles/TextStyles'
import InputField from '../components/Global/InputField'

const Payment = () => {


    const [cardNumber, setCardNumber] = useState("")
    const [originalNumber, setOriginalNumber] = useState("")
    const [cardName, setName] = useState("")
    const [expiry, setExpiry] = useState("")
    const [cvv, setCvv] = useState("")

    const handleNumberChange = (text) => {

    }

    useEffect(() => {
        setOriginalNumber(cardNumber)
        if (!(cardNumber.length >= 19)) {
            const numericInput = cardNumber.replace(/\D/g, '');
            const formattedInput = numericInput.replace(/(.{4})/g, '$1 ');
            setCardNumber(formattedInput)
        }

    }, [cardNumber])

    useEffect(() => {
        expiry.length == 2 ? setExpiry(expiry + "/") : ""
    }, [expiry])

    return (
        // <KeyboardAvoidingView style={styles.mainView}>
        //     <ScrollView style={{
        //         width: '100%',

        //         flex: 1,
        //         flexGrow: 1,
        //         backgroundColor: "gray"
        //     }}>
        <View
            style={styles.mainView}
        // style={{
        // height: '100%',
        // backgroundColor: 'red',
        // flex: 1,
        // flexGrow: 1,
        // minHeight: '100%',
        // }}
        >
            {/* <KeyboardAvoidingView  behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}> */}
            <CreditCard
                text={cardNumber}
                name={cardName}
                expiry={expiry}
            />
            <View style={styles.buttonView} >
                <InputField
                    label={"Card Holder Name"}
                    isNumber
                    value={cardName}
                    onChange={setName}
                    placeholder='Ex. My Name'
                />
                <InputField
                    label={"Card Number"}
                    isNumber
                    placeholder='XXXX XXXX XXXX'
                    value={cardNumber}
                    onChange={setCardNumber}
                    maxLength={19}
                />
                <View style={styles.smallInput}>
                    <View style={styles.smallField}>
                        <InputField
                            label={"CVV"}
                            isNumber
                            value={cvv}
                            onChange={setCvv}
                            maxLength={3}
                            placeholder='Ex. 123'
                        />
                    </View>
                    <View style={styles.smallField}>
                        <InputField
                            label={"Expiry"}
                            isNumber
                            value={expiry}
                            onChange={setExpiry}
                            maxLength={5}
                            placeholder='Ex. XX/XX'
                        />
                    </View>
                </View>

                {/* <View style={styles.spacer}></View> */}
                {/* </ScrollView>

            </KeyboardAvoidingView> */}
                <PrimaryButton
                    title={"Move to Checkout"}
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
        </View>
        //     </ScrollView>
        // </KeyboardAvoidingView>
    )
}

export default Payment

const styles = StyleSheet.create({
    mainView: {
        paddingHorizontal: 20,
        alignItems: 'center',
        flex: 1,
        marginTop: 30,
        height: "100%",
        gap: 40
        // backgroundColor: "black"
    },
    button: {
        padding: 16,
        position: 'absolute',
        bottom: 20,
        width: "100%",
        alignSelf: 'center',
        elevation: 5
    },
    buttonView: {
        width: "100%",
        gap: 20,
        flex: 1
    },
    spacer: {
        height: 48
    },
    smallInput: {
        flexDirection: 'row',
        width: '100%',
        gap: 20
    },
    smallField: {
        flex: 1
    }
})