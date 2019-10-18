import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import LoginScreen from '../screens/Login'
import HomeScreen from '../screens/Home'

const AppNavigator = createStackNavigator({
    Login: {
        screen: LoginScreen,
        navigationOptions: {
            header: null
        }
    },
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            title: 'Página Inicial',
            headerStyle: {
                backgroundColor: 'pink'
            }
        }
    }
})

export default createAppContainer(AppNavigator)