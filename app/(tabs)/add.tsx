import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Constants from 'expo-constants'
import { red } from 'react-native-reanimated/lib/typescript/reanimated2/Colors'
const add = () => {
  return (
    
    <SafeAreaView style={styles.container}>
      <View>
      <Text>add</Text>
      </View>
    </SafeAreaView>
  )
}

export default add

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
        borderColor: 'red',
        borderWidth: 1
    }
})