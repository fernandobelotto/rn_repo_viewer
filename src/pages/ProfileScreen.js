import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { Avatar } from 'react-native-paper'
import { UserContext } from '../context/userContext'
import api from '../api/github'
import { ContributionGraph } from 'react-native-chart-kit'

const ProfileScreen = () => {
  const [data, setData] = useState({})
  const context = useContext(UserContext)
  const user = context.username

  useEffect(() => {
    async function getDataApi() {
      const response = await api.get(`/users/${user}`)
      setData(response.data)
    }
    getDataApi()
  }, [])

  const chartConfig = {
    backgroundGradientFrom: '#161616',
    backgroundGradientFromOpacity: 1,
    backgroundGradientTo: '#161616',
    backgroundGradientToOpacity: 1,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  }

  const commitsData = [
    { date: '2017-01-02', count: 1 },
    { date: '2017-01-03', count: 2 },
    { date: '2017-01-04', count: 3 },
    { date: '2017-01-05', count: 4 },
    { date: '2017-01-05', count: 4 },
    { date: '2017-01-05', count: 4 },
    { date: '2017-01-05', count: 4 },
    { date: '2017-12-05', count: 4 },
    { date: '2017-12-05', count: 4 },
    { date: '2017-12-05', count: 4 },
    { date: '2017-12-05', count: 4 }

  ]

  return (
    <View>
      <ScrollView>
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
        <ScrollView horizontal style={{ marginHorizontal: 20, marginVertical: 20 }}>
          <ContributionGraph
            values={commitsData}
            endDate={new Date('2017-04-01')}
            numDays={365}
            width={900}
            height={220}
            chartConfig={chartConfig}
          />
        </ScrollView>
      </ScrollView>
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
