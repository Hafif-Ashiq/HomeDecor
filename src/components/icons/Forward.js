

import React from 'react'
import { ClipPath, Defs, G, Path, Rect, Svg  } from 'react-native-svg'
import MyColors from '../../styles/MyColors'

const Forward = ({ small = false, primary=false }) => {
    return (
        <Svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<Rect y="44" width="44" height="44" rx="10" transform="rotate(-90 0 44)" fill="#303030"/>
<Path d="M18 30L26 22L18 14" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</Svg>

    )
}

export default Forward