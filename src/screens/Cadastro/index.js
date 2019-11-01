import React, { useState, useEffect } from 'react';
import { KeyboardAvoidingView, View, TextInput, TouchableOpacity, Alert, Image, Text } from 'react-native'
import { Dropdown } from 'react-native-material-dropdown';
import styles from './styles'

import { Background } from '../../components/Background'
import Button from '../../components/Button'
import Input from '../../components/Input'

import Constants from 'expo-constants'
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';

import Plus from 'react-native-vector-icons/Feather'
import perfil from '../../assets/perfil.jpg'

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

    let Sexo = [{
        value: 'Masculino',
    }, {
        value: 'Feminino',
    }, {
        value: 'Outro'
    }, {
        value: 'Prefiro não informar'
    }]

    let Serviço = [{
        value: 'Babá',
    }, {
        value: 'Eletricista ',
    }, {
        value: 'Limpador(a) de piscina',
    }, {
        value: 'Motorista'
    }, {
        value: 'Empreiteiro(a) ',
    }, {
        value: 'Pintor(a) ',
    }, {
        value: 'Encanador(a)',
    }, {
        value: 'Mecânico(a) ',
    }, {
        value: 'Faxineiro(a)',
    },]

    return (
        <Background>
            <View style={styles.viewImage}>
                <Image
                    source={avatar ? { uri: avatar } : perfil}
                    style={styles.image}
                />
                <TouchableOpacity style={styles.circle} onPress={() => imagem()}>
                    <Plus name='plus' size={20} color='#fff' />
                </TouchableOpacity>
            </View>

            <KeyboardAvoidingView style={styles.content}>


                <Input placeholder='Digite seu nome' />

                <Input placeholder='Digite seu sobrenome' />

                <Input placeholder='Digite seu CPF' />
                <Dropdown
                    label="Sexo"
                    baseColor="#858483"
                    data={data}
                    containerStyle={{ width: '80%' }}
                    onChangeText={text => setAccountType(text)}
                />
                <Dropdown
                    label="Tipo de conta"
                    baseColor="#858483"
                    data={data}
                    containerStyle={{ width: '80%' }}
                    onChangeText={text => setAccountType(text)}
                />

                {accountType === 'Empregado' && (
                    <Dropdown
                        label="Serviço"
                        data={Serviço}
                        baseColor="#858483"
                        containerStyle={{ width: '80%' }}
                    />

                )}

                <View style={{ flexDirection: "row" }}>
                    <Button
                        texto='Cadastrar'
                        style={styles.buttonRight} />
                    <Button
                        texto='Voltar'
                        style={styles.buttonLeft}
                        onPress={() => props.navigation.goBack()} />
                </View>
            </KeyboardAvoidingView>
        </Background>
    )
}
