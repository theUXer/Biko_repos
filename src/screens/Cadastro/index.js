import React, { useState, useEffect } from 'react';
import { KeyboardAvoidingView, View, TextInput, TouchableOpacity, Alert, Image, Text } from 'react-native'

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
    /*export default function Cadastro(props) {*/
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

                    <Input placeholder='Digite o tipo do serviço' />

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
