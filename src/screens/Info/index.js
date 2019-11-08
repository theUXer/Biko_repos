import React from 'react'
import { View, Image, Text } from 'react-native';
import { Logo } from '../../helpers/Images'
import styles from '../Perfil/styes'
export default function Info(props) {
    return <View style={{ flex: 1, justifyContent: 'center', alignItems:'center' }}>
        <Image
            source={Logo}
            style={styles.image}
        />
        <Text style={{ fontSize: 25 }}>Nós somos João e Danilo</Text>
    </View>
}