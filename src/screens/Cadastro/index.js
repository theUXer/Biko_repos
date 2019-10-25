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


            
                <TextInput placeholder="Digite seu nome" style={{
                    borderBottomWidth: 1,
                    borderBottomColor: '#dbdbdb',
                    fontSize: 25,
                    color: '#007bff',
                    width: 240,
                }}></TextInput>
                <TextInput placeholder="Digite seu sobrenome" style={{
                    width: 250,
                    borderBottomWidth: 1,
                    borderBottomColor: '#dbdbdb',
                    fontSize: 25,
                    color: '#007bff'
                }}></TextInput>
                <TextInput placeholder="Digite seu CPF" style={{
                    borderBottomWidth: 1,
                    borderBottomColor: '#dbdbdb',
                    color: '#007bff',
                    fontSize: 25,
                    width: 250,
                }}></TextInput>
                <TextInput placeholder="Digite o tipo de serviço" style={{
                    borderBottomWidth: 1,
                    borderBottomColor: '#dbdbdb',
                    fontSize: 25,
                    color: '#007bff',
                    width: 255
                }}></TextInput>
                <View style={{ flexDirection: "row" }}>
                    <Button texto='Cadastrar'></Button>
                    <Button texto='Voltar' onPress={() => props.navigation.goBack()}></Button>
                </View>
            </View>
        </View>
    )
}