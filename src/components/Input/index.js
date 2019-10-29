import React from 'react'
import { TextInput } from 'react-native'

export default function Input(props) {
    return <TextInput placeholder={props.placeholder}
        style={
            {
                borderBottomWidth: 1,
                borderBottomColor: '#000',
                fontSize: 25,
                color: '#000',
                width: 270,
            }
        }
    />
}