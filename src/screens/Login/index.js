import React from 'react';
import { KeyboardAvoidingView, Image, View, ImageBackground } from 'react-native';

import { Background } from '../../components/Background'
import Button from '../../components/Button'
import Input from '../../components/Input'
import Link from '../../components/Link'
import { Logo, Bg } from '../../helpers/Images'

import styles from './styles'

export default function Login(props) {
    return (


        <Background source={Bg} resizeMode='cover'>
            <View>
                <Image source={Logo} style={styles.image} />
                <KeyboardAvoidingView style={styles.keyboard}>
                    <Input color='white' placeholder='Digite seu email' />
                    <Input color='white' placeholder='Digite sua senha' />

                    <View style={{ flexDirection: "row", marginBottom: 5 }}>
                        <Button
                            texto='Login'
                            style={styles.buttonRight}
                            onPress={() => props.navigation.navigate('Home')} />
                        <Button
                            texto='Cadastre-se'
                            style={styles.buttonLeft}
                            onPress={() => props.navigation.navigate('Cadastro')} />
                    </View>

                    <Link text='Perfil' onPress={() => props.navigation.navigate('Perfil')} />

                </KeyboardAvoidingView>
            </View>
        </Background>
    );
}
