import React from 'react'

import Background from '../../components/Background'

import { Logo, Bg } from '../../helpers/Images'
import { Container, Text } from './styles'

let text = 'Esta aplicação foi desenvolvida pelos alunos: \n\n - Danilo Ferreira. \n - João Dalbo.'

export default function Info(props) {
    return (
        <Background source={Bg}>
            <Container>
                <Text>{text}</Text>
            </Container>
        </Background>
    );
}