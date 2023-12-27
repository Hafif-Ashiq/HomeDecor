import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import TextStyles from '../../styles/TextStyles'
import { Back } from '../icons'

const HelpTile = ({ title, onPress }) => {
    return (
        <TouchableOpacity
            activeOpacity={0.9}
            onPress={onPress}
            style={styles.mainView}
        >
            <Text
                style={[
                    TextStyles.primaryText2,
                    TextStyles.headerHeading,
                    TextStyles.bold,
                    TextStyles.nunito
                ]}
            >
                {title}
            </Text>
            <View style={styles.arrowView}>
                <Back />
            </View>
        </TouchableOpacity>
    )
}

export default HelpTile


const styles = StyleSheet.create({
    mainView: {
        paddingVertical: 18,
        paddingHorizontal: 20,
        elevation: 5,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    arrowView: {
        transform: [{ rotate: '180deg' }]
    }
})