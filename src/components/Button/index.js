import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

export default function Button(props) {
    return (
        <TouchableOpacity
            style={{
                backgroundColor: '#ab0993',
                borderRadius: 50,
                width: 100,
                height: 50,
                marginLeft: 5,
                justifyContent: 'center',
                alignItems: 'center'

            }}
            onPress={props.onPress}>
            <Text style={{ color: '#fff' }}>{props.texto}</Text>
        </TouchableOpacity>
    )
}
