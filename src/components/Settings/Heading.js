import React from 'react'
import { Edit } from '../icons'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import TextStyles from '../../styles/TextStyles'

const Heading = ({ title, editable = false, onEdit }) => {
    return (
        <View style={styles.mainView}>
            <Text
                style={[
                    TextStyles.semiBold,
                    TextStyles.settingsLabelText,
                    TextStyles.nunito,
                    TextStyles.headerHeading
                ]}
            >{title}</Text>
            {editable ? <TouchableOpacity onPress={onEdit}>
                <Edit />
            </TouchableOpacity> : <></>}
        </View>
    )
}

export default Heading


const styles = StyleSheet.create({
    mainView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})