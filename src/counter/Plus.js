import React from 'react'
import { Path, Rect, Svg } from 'react-native-svg'
import MyColors from '../styles/MyColors'
import { TouchableOpacity } from 'react-native'

const Plus = ({ disabled = false, onPress }) => {
    return (
        <TouchableOpacity activeOpacity={0.8} disabled={disabled} onPress={onPress}>
            <Svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                <Rect opacity="0.4" width="30" height="30" rx="10" fill={disabled ? MyColors.disabledField : MyColors.counterButtonBackground} />
                <Path d="M21 16H16V21C16 21.55 15.55 22 15 22C14.45 22 14 21.55 14 21V16H9C8.45 16 8 15.55 8 15C8 14.45 8.45 14 9 14H14V9C14 8.45 14.45 8 15 8C15.55 8 16 8.45 16 9V14H21C21.55 14 22 14.45 22 15C22 15.55 21.55 16 21 16Z" fill={disabled ? MyColors.secondaryButton : MyColors.primaryButton} />

            </Svg>
        </TouchableOpacity>
    )
}

export default Plus

