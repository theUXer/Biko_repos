import React from 'react';
import { KeyboardAvoidingView, View } from 'react-native';

import { Background } from '../../components/Background'
import Button from '../../components/Button'
import Input from '../../components/Input'
import Link from '../../components/Link'
import { Logo, Bg } from '../../helpers/Images'

import styles, { Container, Row, Image } from './styles'

export default function Login(props) {
    return (
        <Background source={Bg} resizeMode='cover'>
            <Image source={Logo} />

            <Container>
                <Input color='white' placeholder='Digite seu email' />
                <Input color='white' placeholder='Digite sua senha' />
                
                <Row>
                    <Button
                        texto='Login'
                        style={styles.buttonRight}
                        onPress={() => props.navigation.navigate('Home')} />
                    <Button
                        texto='Cadastre-se'
                        style={styles.buttonLeft}
                        onPress={() => props.navigation.navigate('Cadastro')} />
                </Row>
                {/* <Link text='Perfil' onPress={() => props.navigation.navigate('Perfil')} /> */}
            </Container>
        </Background>
    );
}
