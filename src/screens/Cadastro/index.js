import React from 'react';
import { View, TextInput } from 'react-native'
import styles from '../Login/styles'
import Button from '../../components/Button'
import Input from '../../components/Input'

export default function Cadastro(props) {
    return (
        <View style={styles.container}>
            <View style={{ flex: 0.7, alignItems: 'center', justifyContent: 'space-evenly' }}>

                
                <Input placeholder='Digite seu nome' />

                <Input placeholder='Digite seu sobrenome' />

                <Input placeholder='Digite seu CPF' />

                <Input placeholder='Digite o tipo do serviço' />

                <View style={{ flexDirection: "row" }}>
                    <Button texto='Cadastrar'></Button>
                    <Button texto='Voltar' onPress={() => props.navigation.goBack()}></Button>
                </View>
            </View>
        </View>
    )
}