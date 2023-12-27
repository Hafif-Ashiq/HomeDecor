import React from 'react'
import { Rect, Svg } from 'react-native-svg'
import MyColors from '../styles/MyColors'
import { TouchableOpacity } from 'react-native'

const Minus = ({ disabled = false, onPress }) => {
    return (
        <TouchableOpacity disabled={disabled ? true : false} activeOpacity={0.8} onPress={onPress}>
            <Svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                <Rect opacity="0.4" width="30" height="30" rx="10" fill={disabled ? MyColors.disabledField : MyColors.counterButtonBackground} />
                <Rect x="8" y="14" width="14" height="2" rx="1" fill={disabled ? MyColors.secondaryButton : MyColors.primaryButton} />
            </Svg>
        </TouchableOpacity>
    )
}

export default Minus