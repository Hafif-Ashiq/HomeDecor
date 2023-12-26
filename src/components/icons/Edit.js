
import React from 'react'
import { ClipPath, Defs, G, Path, Rect, Svg } from 'react-native-svg'
import MyColors from '../../styles/MyColors'

const Edit = () => {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
            <Path fillRule="evenodd" clipRule="evenodd" d="M4.29257 18.4594C4.08257 18.2481 3.97757 17.9543 4.00357 17.6565L4.38257 13.4608C4.42457 13.001 4.62657 12.5674 4.95257 12.2394L13.9486 3.18797C14.6506 2.47863 15.9236 2.51384 16.6646 3.25739L19.4026 6.01225L19.4036 6.01326C20.1686 6.78397 20.1996 8.00948 19.4716 8.74397L10.4746 17.7964C10.1496 18.1234 9.71857 18.3266 9.26057 18.3689L5.09057 18.7502C5.06057 18.7522 5.03057 18.7532 4.99957 18.7532C4.73657 18.7532 4.48157 18.6486 4.29257 18.4594ZM16.0186 9.37483L13.3236 6.66324L15.2716 4.70223L17.9656 7.41282L16.0186 9.37483ZM9.07957 16.3636L6.10257 16.6363L6.36657 13.6621L11.9836 8.01048L14.6796 10.7241L9.07957 16.3636ZM18.9996 22.7779C19.5496 22.7779 19.9996 22.3251 19.9996 21.7717C19.9996 21.2193 19.5496 20.7655 18.9996 20.7655H4.99957C4.45057 20.7655 3.99957 21.2193 3.99957 21.7717C3.99957 22.3251 4.45057 22.7779 4.99957 22.7779H18.9996Z" fill={MyColors.secondaryButton} />
        </Svg>


    )
}

export default Edit
