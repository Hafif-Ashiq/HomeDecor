import React from 'react'
import { View } from 'react-native'
import { ActivityIndicator } from 'react-native-paper'
import MyColors from '../../styles/MyColors'

const Loader = () => {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            // backgroundColor: 'red',
            position: 'absolute',
            width: '100%',
            height: "100%"
        }}>
            <ActivityIndicator color={MyColors.primaryButton} size={32} />
        </View>
    )
}

export default Loader