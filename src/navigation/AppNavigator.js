import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createDrawerNavigator } from 'react-navigation-drawer'

import LoginScreen from '../screens/Login'
import HomeScreen from '../screens/Home'
import CadastroScreen from '../screens/Cadastro'
import PerfilScreen from '../screens/Perfil'
import InfoScreen from '../screens/Info'

const AppNavigator = createStackNavigator({
    Login: {
        screen: LoginScreen,
        navigationOptions: {
            title: 'Bem vindo à Biko!',
            header: null
        }
    },
    Home: {
        screen: HomeScreen,
        navigationOptions: () => ({
            title: 'Página Inicial',
            headerStyle: { backgroundColor: '#fff', height: 25 },
            headerTintColor: '#ab0993',
        })
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