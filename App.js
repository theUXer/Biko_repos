import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'

/* ------------- Native Components ------------- */
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { StatusBar } from 'react-native'

/* ------------- App ------------- */
import AppNavigator from './src/routes/AppNavigator'
import { bikoColor } from './src/helpers/Colors'

/* ------------- Expo ------------- */
import { Ionicons } from '@expo/vector-icons'
import { AppLoading } from 'expo'
import * as Font from 'expo-font'

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
    <>
      <StatusBar translucent />
      <Container>
        <AppNavigator />
      </Container>
    </>
  )
}

const Container = styled.SafeAreaView`
  flex: 1;
  margin-top: ${getStatusBarHeight()}px;
`
