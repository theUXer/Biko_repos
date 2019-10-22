import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

export default function Button(props) {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <LinearGradient
                colors={['#9bed98', '#000']}
                style={{ width: 130, padding: 15, alignItems: 'center', borderRadius: 13, marginRight: 5 }}>
                <Text style={{
                    backgroundColor: 'transparent',
                    fontSize: 15,
                    color: '#dbdbdb'
                }}>
                    {props.texto}
                </Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}
