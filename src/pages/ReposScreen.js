import React, { useState, useContext, useEffect } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import RepoCard from '../components/RepoCard'
import { UserContext } from '../context/userContext'
import api from '../api/github'

const ReposScreen = () => {
  const [data, setData] = useState([])
  const context = useContext(UserContext)
  const user = context.username

  useEffect(() => {
    async function getDataApi () {
      const response = await api.get(`/users/${user}/repos`)
      setData(response.data)
    }
    getDataApi()
  }, [])

  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <Text style={styles.header}>Repos</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => { return (<RepoCard data={item} />) }}
      />
    </View>
  )
}

export default ReposScreen

const styles = StyleSheet.create({
  header: {
    fontSize: 36,
    fontFamily: 'Montserrat-Bold',
    color: '#373737',
    textAlign: 'center',
    marginVertical: 10
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
