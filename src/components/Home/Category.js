import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MyColors from '../../styles/MyColors'
import TextStyles from '../../styles/TextStyles'

const Category = ({title,active,children}) => {

  const iconComponent = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { active });
    }
    return child;
  });

  return (
    <View style={styles.mainView}>
      <View style={[styles.svg,active ? styles.active : styles.inActive]}>
        {iconComponent}
      </View>
      <Text style={[
        TextStyles.semiBold,
        TextStyles.textSize1,
        active ? TextStyles.primaryText2 : TextStyles.disabledText,
        TextStyles.nunito
      ]}>
        {title} 
      </Text>
    </View>
  )
}

export default Category


const styles = StyleSheet.create({
  mainView:{
    justifyContent:'center',
    alignItems:'center',
    gap: 5
  },
  svg:{
    width:45,
    height:45,
    
    borderRadius:12,
    justifyContent:'center',
    alignItems:'center'
  },
  active:{
    backgroundColor: MyColors.primary,
  },
  inActive:{
    backgroundColor: MyColors.disabledField,
  }
})