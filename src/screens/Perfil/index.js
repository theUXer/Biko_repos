import React, { useState, useEffect } from 'react';
import { KeyboardAvoidingView, View, TouchableOpacity, TextInput, Alert, Image, Text } from 'react-native';

import styles from './styes'

import { Background } from '../../components/Background'
import Button from '../../components/Button'
import Input from '../../components/Input'

import Constants from 'expo-constants'
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';

import Plus from 'react-native-vector-icons/Feather'
import perfil from '../../assets/perfil.jpg'

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
            <View style={styles.viewImage}>
                <Image
                    source={avatar ? { uri: avatar } : perfil}
                    style={styles.image}
                />
                <TouchableOpacity style={styles.circle} onPress={() => imagem()}>
                    <Plus name='plus' size={20} color='#fff' />
                </TouchableOpacity>
            </View>
            <KeyboardAvoidingView style={{ flex: 0.7, width: '90%', alignItems: 'center', justifyContent: 'space-evenly' }}>
                <Input placeholder="Nome completo" />
                <Input placeholder="Digite seu sobrenome" />
                <Input placeholder="Descrição" />
                <Input placeholder='Mude seu email' />
                <Input placeholder='Altere sua senha' />
                <View style={{ flexDirection: "row" }}>
                    <Button
                        texto='Salvar'
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
