import React from 'react'
import { TextInput } from 'react-native'

export default function Input(props) {
    return <TextInput placeholder = { props.placeholder }
    style = {
        {
            borderBottomWidth: 1,
            borderBottomColor: '#dbdbdb',
            fontSize: 25,
            color: '#007bff',
            width: 250,
        }
    }
    />
}