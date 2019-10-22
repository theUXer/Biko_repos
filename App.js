import React, { useState, useEffect } from 'react';
import { AppLoading } from 'expo'
import * as Font from 'expo-font'
import { Ionicons } from '@expo/vector-icons'
import AppNavigator from './src/navigation/AppNavigator'

export default function App() {
  const [isReady, setIsReady] = useState(false)

  useEffect(async () => {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    })
    setIsReady(true)
  }, [])

  if (!isReady) {
    return <AppLoading />
  }

  return (
    <AppNavigator />
  );
}
