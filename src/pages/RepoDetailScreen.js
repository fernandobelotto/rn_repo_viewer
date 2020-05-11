import React from 'react'
import { StyleSheet, Text, View, Linking } from 'react-native'
import IconComponent from '../components/IconComponent'
import { Button } from 'react-native-paper'
const RepoDetailScreen = ({ route }) => {
  const data = route.params.data

  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <View style={{ backgroundColor: '#EFEFEF', margin: 20, borderRadius: 20, elevation: 5 }}>
        <Text style={styles.header}>{data.name}</Text>
        <Text style={styles.detail}>{data.description}</Text>
        <IconComponent icon='call-split' title='forks' value={data.forks_count} />
        <IconComponent icon='stars' title='stars' value={data.stargazers_count} />
        <IconComponent icon='error' title='issues' value={data.open_issues} />
        <IconComponent icon='visibility' title='watches' value={data.watchers_count} />
        <IconComponent icon='today' title='creation' />
        <Text style={styles.detail}>{data.created_at}</Text>
        <Button
          style={{ marginTop: 100 }}
          icon='git'
          mode='contained'
          onPress={() => Linking.openURL(data.html_url)}
        >Link to repo
        </Button>
      </View>
    </View>
  )
}

export default RepoDetailScreen

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontFamily: 'Montserrat-Bold',
    color: '#373737',
    textAlign: 'center',
    marginVertical: 10
  },
  detail: {
    fontSize: 24,
    fontFamily: 'Montserrat-Light',
    color: '#373737',
    marginHorizontal: 20
  }
})
