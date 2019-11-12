import React from 'react'
import { Logo, Bg } from '../../helpers/Images'
import { Background } from '../../components/Background'
import { Container, Text } from './styles'

let text = 'Esta aplicação foi desenvolvida pelos alunos: \n\n - Danilo Ferreira. \n - João Dalbo.'

export default function Info(props) {
    return (
        <Background source={Bg} resizeMode='cover'>
            <Container>
                <Text>{text}</Text>
            </Container>
        </Background>
    );
}