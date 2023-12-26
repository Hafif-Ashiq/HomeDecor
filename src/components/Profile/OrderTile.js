import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { PrimaryButton } from '../buttons'
import TextStyles from '../../styles/TextStyles'
import MyColors from '../../styles/MyColors'
import { Clock } from '../icons'

const OrderTile = ({ order_no, date, quantity, amount, status, tileStyle }) => {

    const [statusText, setStatusText] = useState("Delivered")

    useEffect(() => {
        if (status == "completed") {
            setStatusText("Delivered")
        }
        if (status == "processing") {
            setStatusText("Processing")
        }
        if (status == "cancelled") {
            setStatusText("Cancelled")
        }
    }, [])

    return (
        <View style={[styles.mainView, ...tileStyle]}>
            <View style={styles.shadowView}>
                <View style={[styles.row, styles.firstRow]}>
                    {/* order number + date */}
                    <Text
                        style={[
                            TextStyles.primaryText2,
                            TextStyles.nunito,
                            TextStyles.headerHeading,
                            TextStyles.semiBold
                        ]}
                    >
                        Order# {order_no}
                    </Text>
                    <Text
                        style={[
                            TextStyles.rightText,
                            TextStyles.nunito,
                            TextStyles.regular,
                            TextStyles.descriptionText,
                            TextStyles.textSize1
                        ]}
                    >
                        {date}
                    </Text>
                </View>
                <View style={styles.subView}>
                    <View style={[styles.row, styles.secondRow]}>
                        {/* quantity + amount */}
                        <View style={styles.textContainer}>
                            <Text
                                style={[
                                    TextStyles.descriptionText,
                                    TextStyles.nunito,
                                    TextStyles.headerHeading,
                                    TextStyles.semiBold
                                ]}
                            >
                                Quantity:
                            </Text>
                            <Text
                                style={[
                                    TextStyles.bold,
                                    TextStyles.primaryText2,
                                    TextStyles.nunito,
                                    TextStyles.headerHeading,
                                ]}
                            >
                                {quantity}
                            </Text>
                        </View>
                        <View style={styles.textContainer}>
                            <Text
                                style={[
                                    TextStyles.descriptionText,
                                    TextStyles.nunito,
                                    TextStyles.headerHeading,
                                    TextStyles.semiBold,
                                    TextStyles.rightText,

                                ]}
                            >
                                Total Amount:
                            </Text>
                            <Text
                                style={[
                                    TextStyles.bold,
                                    TextStyles.nunito,
                                    TextStyles.headerHeading,
                                    TextStyles.rightText,
                                    TextStyles.primaryText2,
                                ]}
                            >
                                Rs. {amount}
                            </Text>
                        </View>
                    </View>
                    <View style={[styles.row, styles.thirdRow]}>
                        <PrimaryButton
                            title={"Detail"}
                            textStyles={[TextStyles.headerHeading]}
                            styles={[styles.button]}
                        />
                        <View style={styles.statusView}>
                            {status == "processing" ? (<Clock />) : <></>}
                            <Text
                                style={[
                                    status == "completed" ? TextStyles.success : status == "processing" ? TextStyles.primaryText2 : TextStyles.descriptionText,
                                    TextStyles.rightText,
                                    TextStyles.nunito,
                                    TextStyles.semiBold,
                                    TextStyles.headerHeading
                                ]}
                            >
                                {statusText}
                            </Text>
                        </View>

                    </View>
                </View>
            </View>
        </View>

    )
}

export default OrderTile


const styles = StyleSheet.create({
    mainView: {
        borderRadius: 12,
        marginHorizontal: 20
    },
    shadowView: {
        borderRadius: 12,
        backgroundColor: 'white',
        elevation: 20,
        shadowColor: '#8A959E',
    },
    row: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 15
    },
    firstRow: {
        paddingBottom: 10,
        paddingTop: 15
    },
    secondRow: {

    },
    thirdRow: {
        paddingLeft: 0
    },
    subView: {
        borderTopColor: MyColors.saveButton,
        borderTopWidth: 2,
        gap: 30,
        paddingTop: 15,
        paddingBottom: 25
    },
    textContainer: {
        flexDirection: 'row',
        gap: 4,
        alignItems: 'center'
    },
    button: {
        paddingVertical: 7,
        paddingHorizontal: 28,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4
    },
    statusView: {
        flexDirection: "row",
        alignItems: 'center',
        gap: 5
    }
})