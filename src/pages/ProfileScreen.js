import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Avatar } from 'react-native-paper'
import { UserContext } from '../context/userContext'
import api from '../api/github'

const ProfileScreen = () => {
  const [data, setData] = useState({})
  const context = useContext(UserContext)
  const user = context.username

  useEffect(() => {
    async function getDataApi () {
      const response = await api.get(`/users/${user}`)
      setData(response.data)
    }
    getDataApi()
  }, [])

  return (
    <View>
      <Text style={styles.header}>Profile</Text>
      <View style={styles.profile}>
        <View style={{ flexDirection: 'row' }}>
          <Avatar.Image size={100} source={{ uri: data.avatar_url }} />
          <View style={{ margin: 20 }}>
            <Text style={styles.name}>{data.name}</Text>
            <Text style={styles.username}>{context.username}</Text>
          </View>
        </View>
        <Text style={styles.bio}>{data.bio}</Text>
        <Text style={[styles.name, { marginTop: 20 }]}>{data.following}</Text>
        <Text style={[styles.username]}>Following</Text>
        <Text style={[styles.name, { marginTop: 20 }]}>{data.followers}</Text>
        <Text style={[styles.username]}>Followers</Text>
        <Text style={[styles.name, { marginTop: 20 }]}>{data.public_repos}</Text>
        <Text style={[styles.username]}>Repositories</Text>

      </View>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  header: {
    fontSize: 36,
    fontFamily: 'Montserrat-Bold',
    color: '#373737',
    textAlign: 'center',
    marginVertical: 40
  },
  profile: {
    marginHorizontal: 47
  },
  name: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 18
  },
  username: {
    fontFamily: 'Montserrat-Light',
    fontSize: 16
  },
  bio: {
    fontFamily: 'Montserrat-Light',
    fontSize: 16,
    marginTop: 20
  }
})
