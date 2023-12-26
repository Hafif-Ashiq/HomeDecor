import React from 'react'
import { View } from 'react-native'
import TextStyles from '../../styles/TextStyles'

const NotificationTile = () => {
    return (
        <View
            style={styles.mainView}
        >
            <Text
                style={[
                    TextStyles.descriptionText,
                    TextStyles.textSize1,
                    TextStyles.regular,
                    TextStyles.nunito
                ]}
            >
                {/* {label} */}
            </Text>

        </View>
    )
}

export default NotificationTile