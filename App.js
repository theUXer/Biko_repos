import React, { useState, useEffect } from 'react';

/* ------------- Native Components ------------- */
import { SafeAreaView, StyleSheet } from 'react-native'
import { AppLoading } from 'expo'
import * as Font from 'expo-font'
import { Ionicons } from '@expo/vector-icons'
import AppNavigator from './src/navigation/AppNavigator'

export default function App() {
  const [isReady, setIsReady] = useState(false)

  async function loadFonts() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    })
    setIsReady(true)
  }

  useEffect(() => {
    loadFonts()
  }, [])

  if (!isReady) {
    return <AppLoading />
  }

  return (
    <SafeAreaView style={{ flex: 1}}>
      <AppNavigator />
    </SafeAreaView>
  );
}
