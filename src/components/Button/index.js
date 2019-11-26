import React from 'react'
import { Touchable, Text } from './styles'

export default function Button({ style, right, left, onPress, text }) {
    return (
        <Touchable 
            right={right} 
            left={left} 
            style={style} 
            onPress={onPress}>
            <Text>{text}</Text>
        </Touchable>
    )
}
