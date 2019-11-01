import React from 'react';
import { KeyboardAvoidingView, Image, View } from 'react-native';

import Background from '../../components/Background'
import Button from '../../components/Button'
import Input from '../../components/Input'
import Link from '../../components/Link'
import { Logo } from '../../helpers/Images'

import styles from './styles'

export default function Login(props) {
    return (
        <Background>
            <Image source={Logo} style={styles.image} />
            <KeyboardAvoidingView style={styles.keyboard}>
                <Input placeholder='Digite seu email' />
                <Input placeholder='Digite sua senha'  />

                <View style={{ flexDirection: "row", marginBottom: 5 }}>
                    <Button 
                        texto='Login' 
                        style={styles.buttonRight} 
                        onPress={() => props.navigation.navigate('Home')} />
                    <Button 
                        texto='Cadastre-se' 
                        style={styles.buttonLeft}
                        onPress={() => props.navigation.navigate('Cadastro')}  />
                </View>

                <Link text='Perfil' onPress={() => props.navigation.navigate('Perfil')} />

            </KeyboardAvoidingView>
        </Background>
    );
}
