import React from 'react';
import { View, TextInput } from 'react-native';
import styles from './styles'
import Button from '../../components/Button'
import Input from '../../components/Input'

export default function Login(props) {
    return (
        <View style={styles.container}>
            <View style={{ flex: 0.4, alignItems: 'center', justifyContent: 'space-evenly' }}>

                <Input placeholder='Digite seu e-mail' />

                <Input placeholder='Digite sua senha' />

                <View style={{ flexDirection: "row" }}>
                    <Button texto='Login' onPress={() => props.navigation.navigate('Home')} />
                    <Button texto='Cadastre-se' onPress={() => props.navigation.navigate('Cadastro')} />
                    <Button texto='Perfil' onPress={() => props.navigation.navigate('Perfil')} />
                </View>

            </View>
        </View>
    );
}
