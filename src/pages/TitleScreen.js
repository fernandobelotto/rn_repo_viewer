import React, { useEffect } from 'react'
import { View, Text } from 'react-native'

const TitleScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => { navigation.navigate('SignInScreen') }, 2000)
  }, [])
  return (
    <View style={{ backgroundColor: '#C4C4C4', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ textAlign: 'left', fontFamily: 'Montserrat-Light', fontSize: 64 }}>Repo</Text>
      <Text style={{ textAlign: 'left', fontFamily: 'Montserrat-Bold', fontSize: 64 }}>Viewer</Text>
    </View>
  )
}

export default TitleScreen
