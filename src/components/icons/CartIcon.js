

import React from 'react'
import { Path, Svg } from 'react-native-svg'
import MyColors from '../../styles/MyColors'

const CartIcon = ({ small = false, primary=false }) => {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" width={small ? "16" : "28"} height={small ? "16" : "28"} viewBox="0 0 24 24" fill="none">
            <Path fillRule="evenodd" clipRule="evenodd" d="M0 3.75C0 3.55109 0.0790176 3.36032 0.21967 3.21967C0.360322 3.07902 0.551088 3 0.75 3H3C3.1673 3.00005 3.32978 3.05603 3.4616 3.15904C3.59342 3.26205 3.68701 3.40618 3.7275 3.5685L4.335 6H21.75C21.8639 6.00003 21.9763 6.02602 22.0787 6.07598C22.1811 6.12594 22.2708 6.19857 22.3409 6.28836C22.411 6.37814 22.4598 6.48272 22.4834 6.59416C22.5071 6.7056 22.5051 6.82096 22.4775 6.9315L20.2275 15.9315C20.187 16.0938 20.0934 16.238 19.9616 16.341C19.8298 16.444 19.6673 16.5 19.5 16.5H6C5.8327 16.5 5.67022 16.444 5.5384 16.341C5.40658 16.238 5.31299 16.0938 5.2725 15.9315L2.415 4.5H0.75C0.551088 4.5 0.360322 4.42098 0.21967 4.28033C0.0790176 4.13968 0 3.94891 0 3.75ZM4.71 7.5L6.585 15H18.915L20.79 7.5H4.71ZM7.5 19.5C7.10218 19.5 6.72064 19.658 6.43934 19.9393C6.15804 20.2206 6 20.6022 6 21C6 21.3978 6.15804 21.7794 6.43934 22.0607C6.72064 22.342 7.10218 22.5 7.5 22.5C7.89782 22.5 8.27936 22.342 8.56066 22.0607C8.84196 21.7794 9 21.3978 9 21C9 20.6022 8.84196 20.2206 8.56066 19.9393C8.27936 19.658 7.89782 19.5 7.5 19.5ZM4.5 21C4.5 20.2044 4.81607 19.4413 5.37868 18.8787C5.94129 18.3161 6.70435 18 7.5 18C8.29565 18 9.05871 18.3161 9.62132 18.8787C10.1839 19.4413 10.5 20.2044 10.5 21C10.5 21.7956 10.1839 22.5587 9.62132 23.1213C9.05871 23.6839 8.29565 24 7.5 24C6.70435 24 5.94129 23.6839 5.37868 23.1213C4.81607 22.5587 4.5 21.7956 4.5 21ZM18 19.5C17.6022 19.5 17.2206 19.658 16.9393 19.9393C16.658 20.2206 16.5 20.6022 16.5 21C16.5 21.3978 16.658 21.7794 16.9393 22.0607C17.2206 22.342 17.6022 22.5 18 22.5C18.3978 22.5 18.7794 22.342 19.0607 22.0607C19.342 21.7794 19.5 21.3978 19.5 21C19.5 20.6022 19.342 20.2206 19.0607 19.9393C18.7794 19.658 18.3978 19.5 18 19.5ZM15 21C15 20.2044 15.3161 19.4413 15.8787 18.8787C16.4413 18.3161 17.2044 18 18 18C18.7956 18 19.5587 18.3161 20.1213 18.8787C20.6839 19.4413 21 20.2044 21 21C21 21.7956 20.6839 22.5587 20.1213 23.1213C19.5587 23.6839 18.7956 24 18 24C17.2044 24 16.4413 23.6839 15.8787 23.1213C15.3161 22.5587 15 21.7956 15 21Z" fill={primary ? MyColors.primaryButton : MyColors.secondaryButton} />
        </Svg>

    )
}

export default CartIcon