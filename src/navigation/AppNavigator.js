import React from 'react'

import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createDrawerNavigator } from 'react-navigation-drawer'

import LoginScreen from '../screens/Login'
import HomeScreen from '../screens/Home'
import CadastroScreen from '../screens/Cadastro'
import PerfilScreen from '../screens/Perfil'
import InfoScreen from '../screens/Info'
import Drawer from '../components/Drawer'

const LoginNavigator = createStackNavigator({
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

const AppNavigator = createDrawerNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: { 
            title: 'Home',
            headerStyle: {
                paddingVertical: '6%',
                backgroundColor: '#fff'
            },
            headerTintColor: '#ab0993',
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
},
{
  contentComponent: Drawer
})

const Switch = createSwitchNavigator({
    LoginStack: LoginNavigator,
    App: AppNavigator
})

export default createAppContainer(Switch)