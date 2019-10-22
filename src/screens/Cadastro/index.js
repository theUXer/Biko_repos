import React from 'react';
import { View, TextInput } from 'react-native';
import styles from '../Login/styles'
import Button from '../../components/Button'

export default function Cadastro() {
    return (
        <View style={styles.container}>
            <TextInput>Nome</TextInput>

            <Button>Cadastrar</Button>
        </View>
    )
}