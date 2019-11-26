import React, { useState, useEffect } from 'react';
import { View, Alert } from 'react-native';

import { Keyboard, Row } from './styes'

import Background from '../../components/Background'
import ImageInput from '../../components/ImageInput'
import Button from '../../components/Button'
import Input from '../../components/Input'

import Constants from 'expo-constants'
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';

export default function Perfil(props) {
    const [avatar, setAvatar] = useState('')

    useEffect(() => {
        getPermissions()
    }, [])

    async function getPermissions() {
        if (Constants.platform.ios) {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL)
            if (status !== 'granted') {
                console.log('Precisamos desta permissão para tudo funcionar corretamente')
            }
        }
    }
    async function pickImage() {
        var result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3]
        })
        if (result.cancelled === false) {
            setAvatar(result.uri)
        }

        setAvatar(result.uri)
    }
    async function pickImageWithCamera() {
        var result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3]
        })

        if (result.cancelled === false) {
            setAvatar(result.uri)
        }

        setAvatar(result.uri)
    }
    function deletePick() {
        setAvatar('')
    }

    function imagem() {
        console.log(avatar)
        Alert.alert(
            'Mensagem',
            'Você deseja utilizar a câmera ou a galeria?',
            [{ text: 'Excluir', onPress: () => deletePick() },
            { text: 'Câmera', onPress: () => pickImageWithCamera() },
            { text: 'Galeria', onPress: () => pickImage() }]
        )
    }
    let data = [{
        value: 'Empregado',
    }, {
        value: 'Empregador',
    }]

    return (
        <Background>
            <ImageInput
                onPress={() => imagem()}
                source={avatar && { uri: avatar }}
            />
            <Keyboard>
                <Input placeholder="Nome completo" />
                <Input placeholder="Digite seu sobrenome" />
                <Input placeholder="Descrição" />
                <Input placeholder='Mude seu email' />
                <Input placeholder='Altere sua senha' />

                <Row>
                    <Button
                        right
                        text='Salvar' />
                    <Button
                        left
                        text='Voltar'
                        onPress={() => props.navigation.goBack()} />
                </Row>

            </Keyboard>
        </Background>
    )
}
