import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import LoginScreen from '../screens/Login'
import HomeScreen from '../screens/Home'
import CadastroScreen from '../screens/Cadastro'
import PerfilScreen from '../screens/Perfil'
import InfoScreen from '../screens/Info'
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
            header: null
        }
    },
    Cadastro: {
        screen: CadastroScreen,
        navigationOptions: {
            header: null
        }
    },
    Perfil: {
        screen: PerfilScreen,
        navigationOptions: {
            header: null
        }
    },
    Info: {
        screen: InfoScreen
    }
})

export default createAppContainer(AppNavigator)