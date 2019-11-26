import React from 'react'

import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import LoginNavigator from '../LoginNavigator'
import HomeNavigator from '../HomeNavigator'

const SwitchNavigator = createSwitchNavigator({
    LoginStack: LoginNavigator,
    HimeStack: HomeNavigator
})

export default createAppContainer(SwitchNavigator)