import React from 'react'
import { View, Text, Image } from 'react-native'
import { Button } from 'react-native-paper'

const TitleScreen = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: '#fff', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image style={{ resizeMode: 'contain', width: 100, height: 100 }} source={require('../assets/icon.png')} />
      <Text style={{ textAlign: 'left', fontFamily: 'Montserrat-Light', fontSize: 58 }}>Repo</Text>
      <Text style={{ textAlign: 'left', fontFamily: 'Montserrat-Bold', fontSize: 58 }}>Viewer</Text>
      <Button
        style={{ marginTop: 100 }}
        icon='login'
        mode='contained'
        onPress={() => navigation.navigate('SignInScreen')}
      >
        Continue
      </Button>
    </View>
  )
}

export default TitleScreen
