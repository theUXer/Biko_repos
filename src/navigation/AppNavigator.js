import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import LoginScreen from '../screens/Login'
import HomeScreen from '../screens/Home'
import CadastroScreen from '../screens/Cadastro'
import PerfilScreen from '../screens/Perfil'
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
    }
})

export default createAppContainer(AppNavigator)