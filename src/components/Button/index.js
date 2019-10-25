import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
// import { LinearGradient } from 'expo-linear-gradient'

export default function Button(props) {
    return (
        <TouchableOpacity
            style={{
                backgroundColor: '#058',
                borderRadius: 50,
                width: 100,
                height: 50,
                marginLeft: 5,
                justifyContent: 'center',
                alignItems: 'center'

            }}
            onPress={props.onPress}>
            <Text style={{ color: '#f0ebdf' }}>{props.texto}</Text>
        </TouchableOpacity>
    )
}
