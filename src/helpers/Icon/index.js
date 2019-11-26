import React from 'react'
import { Platform } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

import { bikoColor } from '../../helpers/Colors'

export default function Icon ({ name, color, size, ...props }) {
  return (
    <Ionicons
      size={size || 20}
      color={color || bikoColor.white}
      name={`${Platform.select({
        ios: `ios-${name}`,
        android: `md-${name}`
    })}`}
      {...props}
    />
  )
}
