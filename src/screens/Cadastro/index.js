import React from 'react';
import { KeyboardAvoidingView, View, TextInput } from 'react-native'

import styles from './styles'

import { Background } from '../../components/Background'
import Button from '../../components/Button'
import Input from '../../components/Input'

export default function Cadastro(props) {
    return (
        <Background>
            <KeyboardAvoidingView style={styles.content}>

                
                <Input placeholder='Digite seu nome' />

                <Input placeholder='Digite seu sobrenome' />

                <Input placeholder='Digite seu CPF' />

                <Input placeholder='Digite o tipo do serviço' />

                <View style={{ flexDirection: "row" }}>
                    <Button 
                        texto='Cadastrar' 
                        style={styles.buttonRight}/>
                    <Button 
                        texto='Voltar' 
                        style={styles.buttonLeft}
                        onPress={() => props.navigation.goBack()} />
                </View>
            </KeyboardAvoidingView>
        </Background>
    )
}