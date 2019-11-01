import React from 'react'
import { Text } from 'react-native'

export default function Link(props) {
    return <Text style={{ color: '#ab0993', textDecorationLine: "underline", fontSize: 20 }} onPress={props.onPress}>{props.text}</Text>
}
