import React from 'react'

import { createStackNavigator } from 'react-navigation-stack'
import { createDrawerNavigator } from 'react-navigation-drawer'

import HomeScreen from '../../screens/Home'
import PerfilScreen from '../../screens/Perfil'
import InfoScreen from '../../screens/Info'

import Drawer from '../../components/Drawer'
import Header from '../../components/Header'

const HomeScreenStack = createStackNavigator(
    {
        HomeScreen: {
            screen: HomeScreen,
            navigationOptions: {
                header: <Header home />
            }
        }
    }, 
)

const PerfilScreenStack = createStackNavigator(
    {
        PerfilScreen: {
            screen: PerfilScreen,
            navigationOptions: {
                header: <Header />
            }
        }
    }
)

const InfoScreenStack = createStackNavigator(
    {
        InfoScreen: {
            screen: InfoScreen,
            navigationOptions: {
                header: <Header />
            }
        }
    }
)

export default createDrawerNavigator({
        Home: { screen: HomeScreenStack },
        Perfil: { screen: PerfilScreenStack },
        Info: { screen: InfoScreenStack }
    },
    { contentComponent: Drawer }
)
