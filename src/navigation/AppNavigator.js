import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createDrawerNavigator } from 'react-navigation-drawer'

import LoginScreen from '../screens/Login'
import HomeScreen from '../screens/Home'
import CadastroScreen from '../screens/Cadastro'
import PerfilScreen from '../screens/Perfil'
<<<<<<< HEAD

const AppNavigator = createDrawerNavigator({
=======
import InfoScreen from '../screens/Info'
const AppNavigator = createStackNavigator({
>>>>>>> c563d43d73ec2ff42fda97ef1a1dbf60856d9935
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