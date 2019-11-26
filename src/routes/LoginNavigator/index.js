import React from 'react'

import { createStackNavigator } from 'react-navigation-stack'

import LoginScreen from '../../screens/Login'
import CadastroScreen from '../../screens/Cadastro'

export default createStackNavigator({
    Login: {
        screen: LoginScreen,
        navigationOptions: {
            header: null
        }
    },
    Cadastro: {
        screen: CadastroScreen,
        navigationOptions: {
            header: null
        }
    },
})
