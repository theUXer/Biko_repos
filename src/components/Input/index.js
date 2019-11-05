import React from 'react'
import { TextInput } from 'react-native'

export default function Input(props) {
    return <TextInput
        placeholder={props.placeholder}
        placeholderTextColor='#fff'
        style={{
            fontSize: 20,
            width: '80%',
            marginBottom: 10,
            paddingHorizontal: 5,
            borderBottomWidth: 1,
            color: '#fff',
            borderBottomColor: '#fff'
        }}
    />
}