import React from 'react'
import { View } from 'react-native'
import { ActivityIndicator } from 'react-native-paper'
import MyColors from '../../styles/MyColors'

const Loader = () => {
    return (
        <View style={{
            flex: 1
        }}>
            <ActivityIndicator color={MyColors.primaryButton} size={24} />
        </View>
    )
}

export default Loader