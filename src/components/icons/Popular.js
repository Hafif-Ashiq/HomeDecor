



import React from 'react'
import { ClipPath, Defs, G, Path, Rect, Svg } from 'react-native-svg'
import MyColors from '../../styles/MyColors'

const Popular = ({active}) => {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <G clip-path="url(#clip0_1_626)">
                <Path d="M19.9824 7.7248C19.9402 7.59521 19.8281 7.5007 19.6932 7.48101L13.2171 6.53985L10.3209 0.671623C10.2608 0.549189 10.1362 0.471863 10.0002 0.471863C9.86412 0.471863 9.73918 0.549189 9.6794 0.671623L6.78288 6.5402L0.306783 7.48137C0.171819 7.50106 0.0601256 7.59521 0.0175245 7.72516C-0.0243607 7.8544 0.0103646 7.99688 0.108097 8.09175L4.79458 12.6597L3.68803 19.1101C3.66512 19.2443 3.72025 19.38 3.83015 19.4602C3.94077 19.5411 4.08719 19.5515 4.20712 19.4874L10.0002 16.4423L15.7925 19.4874C15.8448 19.5149 15.9024 19.5286 15.9593 19.5286C16.0334 19.5286 16.1072 19.5056 16.1698 19.4602C16.2801 19.38 16.3352 19.2443 16.3119 19.1101L15.2057 12.6601L19.8922 8.09175C19.9896 7.99616 20.0247 7.85404 19.9824 7.7248Z" stroke={active ? "white" : MyColors.svgDisabled} strokeWidth="1.5" />
            </G>
            <Defs>
                <ClipPath id="clip0_1_626">
                    <Rect width="20" height="20" fill="white" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default Popular