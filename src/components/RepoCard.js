import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const RepoCard = ({ data }) => {
  return (
    <TouchableOpacity activeOpacity={1}>

      <View style={styles.card}>
        <View style={{ padding: 15 }}>
          <Text style={styles.title}>{data.name}</Text>
          <Text style={{ marginVertical: 15 }}>{data.description}</Text>
          <Text>{data.language}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default RepoCard

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#EFEFEF',
    marginHorizontal: 40,
    marginVertical: 5,
    elevation: 5,
    borderRadius: 10
  },
  title: {
    color: '#373737',
    fontFamily: 'Montserrat-Bold',
    fontSize: 18
  },
  tech: {
    fontSize: 18,
    fontFamily: 'Montserrat-Light'
  }
})
