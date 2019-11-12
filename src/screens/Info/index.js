import React from 'react'
import { View, Image, Text } from 'react-native';
import { Logo, Bg } from '../../helpers/Images'
import styles from '../Perfil/styes'
import { Background } from '../../components/Background'


export default function Info(props) {
    return (
    
        <Background source={Bg} resizeMode='cover'>
    
    <View style={{ flex: 1, justifyContent: 'center', alignItems:'center' }}>
        <Text style={{ fontSize: 25, color: 'white', alignItems: 'center' }}>
            
            Esta aplicação foi desenvolvida pelos alunos: - Danilo Ferreira - João Dalbo.</Text>
    </View>

    </Background>

);}