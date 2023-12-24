


import React from 'react'
import { ClipPath, Defs, G, Path, Rect, Svg } from 'react-native-svg'
import MyColors from '../../styles/MyColors'

const Lamp = ({ active }) => {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
            <G clip-path="url(#clip0_139_546)">
                <Path d="M11.6927 19.1138C7.30845 19.1138 3.74182 22.6805 3.74182 27.0647C3.74182 27.5813 4.16056 28 4.67719 28H18.7084C19.2251 28 19.6438 27.5813 19.6435 27.0647C19.6435 22.6805 16.0768 19.1138 11.6927 19.1138ZM5.68463 26.1292C6.1358 23.2192 8.65823 20.9846 11.693 20.9846C14.7277 20.9846 17.2502 23.2192 17.7013 26.1292H5.68463Z" fill={active ? "white" : MyColors.svgDisabled} />
                <Path d="M25.5118 2.0828C24.2194 0.790107 22.4952 0.0782471 20.6568 0.0782471C18.8188 0.0782471 17.0948 0.790107 15.8021 2.0828C13.125 4.75989 13.125 9.11603 15.8021 11.7931C15.9773 11.9687 16.2152 12.0672 16.4635 12.0672C16.7116 12.0672 16.9492 11.9687 17.1248 11.7929L25.5119 3.40551C25.8773 3.04031 25.8773 2.44789 25.5118 2.0828ZM16.5255 9.74674C15.2035 7.8036 15.4031 5.12744 17.1248 3.40573C18.0643 2.46659 19.3183 1.94931 20.6569 1.94931C21.6761 1.94931 22.6461 2.24894 23.4659 2.80642L16.5255 9.74674Z" fill={active ? "white" : MyColors.svgDisabled}  />
                <Path d="M14.7189 0.213245C14.3541 -0.0867134 13.8243 -0.0682839 13.482 0.256283L2.50676 10.6392C2.32465 10.8116 2.21927 11.0498 2.2143 11.3008C2.20932 11.5515 2.30535 11.7938 2.48089 11.973L11.0241 20.7034L12.3615 19.3948L4.48353 11.3444L14.1683 2.18258L15.8067 3.52924L16.995 2.08409L14.7189 0.213245Z" fill={active ? "white" : MyColors.svgDisabled}  />
            </G>
            <Defs>
                <ClipPath id="clip0_139_546">
                    <Rect width="28" height="28" fill="white" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default Lamp


