import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import TextStyles from '../../styles/TextStyles'
import { Back } from '../icons'

const HelpTile = () => {
    return (
        <View
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
                FAQs
            </Text>
            <View style={styles.arrowView}>
                <Back />
            </View>
        </View>
    )
}

export default HelpTile


const styles = StyleSheet.create({
    mainView: {
        paddingVertical: 16,
        paddingHorizontal: 20,
        elevation: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    arrowView: {
        transform: [{ rotate: '180deg' }]
    }
})