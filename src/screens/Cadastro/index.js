import React, { useState, useEffect } from 'react'
import { Alert } from 'react-native'
import { Keyboard, Row } from './styles'

import Background from '../../components/Background'
import ImageInput from '../../components/ImageInput'
import Dropdown from '../../components/Dropdown'
import Button from '../../components/Button'
import Input from '../../components/Input'
import Constants from 'expo-constants'
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';

export default function Cadastro(props) {
    const [avatar, setAvatar] = useState('')
    const [accountType, setAccountType] = useState('')

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
            [
            { text: 'Excluir', onPress: () => deletePick() },
            { text: 'Câmera', onPress: () => pickImageWithCamera() },
            { text: 'Galeria', onPress: () => pickImage() }]
        )
    }
    let data = [
        { value: 'Empregado'}, 
        { value: 'Empregador' }
    ]

    let Sexo = [
        { value: 'Masculino' }, 
        { value: 'Feminino' }, 
        { value: 'Outro' }, 
        { value: 'Prefiro não informar' }
    ]

    let Serviço = [
        { value: 'Babá' }, 
        { value: 'Eletricista' }, 
        { value: 'Limpador(a) de piscina' }, 
        { value: 'Motorista' }, 
        { value: 'Empreiteiro(a)' },
        { value: 'Pintor(a)' }, 
        { value: 'Encanador(a)' }, 
        { value: 'Mecânico(a)' }, 
        { value: 'Faxineiro(a)' },
    ]

    return (

        <Background>
            <ImageInput
                onPress={() => imagem()}
                source={avatar && { uri: avatar }}
            />

            <Keyboard>

                <Input placeholder='Digite seu nome' />

                <Input placeholder='Digite seu sobrenome' />

                <Input placeholder='Digite seu CPF' />

                <Dropdown
                    data={Sexo}
                    label='Sexo'
                    onChangeText={text => setAccountType(text)}
                />

                <Dropdown
                    data={data}
                    label='Tipo de conta'
                    onChangeText={text => setAccountType(text)}
                />

                <Input placeholder='Digite um email válido' />

                <Input placeholder='Digite sua senha' />

                {accountType === 'Empregado' && (
                    <Dropdown
                        data={Serviço}
                        label='Serviço'
                    />
                )}

                <Row>
                    <Button right text='Cadastrar' />
                    <Button
                        left text='Voltar'
                        onPress={() => props.navigation.goBack()} />
                </Row>
            </Keyboard>
        </Background>

    )
}
