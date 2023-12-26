
import React from 'react'
import { ClipPath, Defs, G, Path, Rect, Svg } from 'react-native-svg'
import MyColors from '../../styles/MyColors'

const Clock = () => {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <G clipPath="url(#clip0_62_596)">
                <Path d="M9.99984 18.3334C14.6022 18.3334 18.3332 14.6024 18.3332 10C18.3332 5.39765 14.6022 1.66669 9.99984 1.66669C5.39746 1.66669 1.6665 5.39765 1.6665 10C1.6665 14.6024 5.39746 18.3334 9.99984 18.3334Z" stroke="#242424" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <Path d="M10 5V10L13.3333 11.6667" stroke="#242424" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </G>
            <Defs>
                <ClipPath id="clip0_62_596">
                    <Rect width="20" height="20" fill="white" />
                </ClipPath>
            </Defs>
        </Svg>






    )
}

export default Clock