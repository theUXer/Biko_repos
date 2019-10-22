import React from 'react';
import { View, TextInput } from 'react-native';
import styles from './styles'
import Button from '../../components/Button'

export default function Login(props) {
    return (
        <View style={styles.container}>
            <View style={{ flex: 0.4, alignItems: 'center', justifyContent: 'space-evenly' }}>

                <TextInput placeholder='Digite seu email' style={{
                    borderBottomWidth: 1,
                    borderBottomColor: '#dbdbdb',
                    fontSize: 25,
                }} placeholderTextColor='#dbdbdb'></TextInput>
                <TextInput placeholder='Digite sua senha' style={{
                    borderBottomWidth: 1,
                    borderBottomColor: '#dbdbdb',
                    fontSize: 25,
                }} placeholderTextColor='#dbdbdb'></TextInput>

                <View style={{ flexDirection: "row" }}>
                    <Button texto='Login' onPress={() => props.navigation.navigate('Home')} />
                    <Button texto='Cadastre-se' onPress={() => props.navigation.navigate('Cadastro')} />
                    <Button texto='Perfil' onPress={() => props.navigation.navigate('Perfil')} />
                </View>

            </View>
        </View>
    );
}
