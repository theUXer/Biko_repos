import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { bikoColor } from '../../helpers/Colors'

export default function Button(props) {
    return (
        <TouchableOpacity
            style={[{
                borderRadius: 50,
                width: 100,
                height: 50,
                marginLeft: 5,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: bikoColor.primary
            }, props.style]}
            onPress={props.onPress}>
            <Text style={{ color: '#fff' }}>{props.texto}</Text>
        </TouchableOpacity>
    )
}
