import React from 'react'
import { TextInput } from './styles'

export default function Input({ placeholder, secureTextEntry }) {
    return <TextInput placeholder={placeholder} secureTextEntry={secureTextEntry} />
}