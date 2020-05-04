import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import { TextInput, Button } from 'react-native-paper'
import { UserContext } from '../context/userContext'

const SignInScreen = ({ navigation }) => {
  const context = useContext(UserContext)

  return (
    <View style={{ backgroundColor: '#FFF', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ marginLeft: 47, marginBottom: 47, textAlign: 'left', fontFamily: 'Montserrat-Bold', fontSize: 36 }}>Connect Your Account</Text>
      <View>
        <TextInput
          style={{ width: 300 }}
          label='Github Username'
          value={context.username}
          onChangeText={(text) => context.setUsername(text)}
        />
      </View>
      <Button
        style={{ marginTop: 47, marginLeft: 160 }}
        icon='login'
        mode='contained'
        onPress={() => navigation.navigate('BottomStack')}
      >
          Continue
      </Button>
    </View>
  )
}

export default SignInScreen
