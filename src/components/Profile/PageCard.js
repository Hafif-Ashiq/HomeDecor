import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Back } from '../icons'
import TextStyles from '../../styles/TextStyles'
import MyColors from '../../styles/MyColors'

const PageCard = ({onPress,heading,subText}) => {
  return (
    <TouchableOpacity activeOpacity={0.9} onPress={onPress} style={styles.mainView}>
        <View style={styles.textView}>
            <Text
                style={[
                    TextStyles.primaryText2,
                    TextStyles.nunito,
                    TextStyles.heading3,
                    TextStyles.bold
                ]}
            >
                {heading}
            </Text>
            <Text
                style={[
                    TextStyles.regular,
                    TextStyles.descriptionText,
                    TextStyles.justifyText,
                    TextStyles.textSize1
                ]}
            >
                {subText}
                </Text>
        </View>
        <View style={styles.icon}>
            <Back />
        </View>
    </TouchableOpacity>
  )
}

export default PageCard


const styles = StyleSheet.create({
    mainView:{
        flexDirection:'row',
        paddingHorizontal:20,
        paddingVertical:18,
        justifyContent:'space-between',
        alignItems:'center',
        width:'100%',
        elevation:4,
        backgroundColor:'white',
        borderRadius:4
    },
    textView:{
        gap:5
    },
    icon:{
        transform: [{ rotate: '180deg' }],
    }
})