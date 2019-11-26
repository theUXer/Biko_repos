import React, { useState } from 'react';
import { KeyboardAvoidingView, View } from 'react-native';

import Background from '../../components/Background'
import Button from '../../components/Button'
import Input from '../../components/Input'
import Link from '../../components/Link'

import { Logo, Bg } from '../../helpers/Images'

import { Container, Row, Image } from './styles'

export default function Login(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <Background source={Bg}>
            <Image source={Logo} />

            <Container>
                <Input 
                    placeholder='Digite seu email' 
                    onChange={text => setEmail(text.trim())} />

                <Input 
                    secureTextEntry
                    placeholder='Digite sua senha' 
                    onChange={text => setPassword(text.trim())} />
                
                <Row>
                    <Button
                        right text='Login'
                        onPress={() => props.navigation.navigate('Home')} />
                    <Button
                        left text='Cadastre-se'
                        onPress={() => props.navigation.navigate('Cadastro')} />
                </Row>

                <Link onPress={() => props.navigation.navigate('Perfil')}>
                    Esqueci a senha
                </Link>
            </Container>
        </Background>
    );
}
