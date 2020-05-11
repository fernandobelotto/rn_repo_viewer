import React from 'react'
import { View, Text } from 'react-native'
import Material from 'react-native-vector-icons/MaterialIcons'

const IconComponent = ({ title, icon, value }) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
      <Material name={icon} size={30} color='#373737' style={{ margin: 20 }} />
      <Text style={{ color: '#373737', fontSize: 20 }}>{title}</Text>
      <Text style={{ marginLeft: 20, color: '#373737', fontSize: 20, fontFamily: 'Montserrat-Light' }}>{value}</Text>
    </View>
  )
}

export default IconComponent
