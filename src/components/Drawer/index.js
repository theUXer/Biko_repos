import React from 'react';
import { View } from 'react-native';
import { Container, Button, Line, Text } from './styles'

export default function Drawer({ navigation }) {
  return (
    <Container>
      <View>
        <Button onPress={() => navigation.navigate('Perfil')}>
          <Text>Perfil</Text>
        </Button>

        <Line />

        <Button onPress={() => navigation.navigate('Home')}>
          <Text>Home</Text>
        </Button>

        <Line />

        <Button onPress={() => navigation.navigate('Info')}>
          <Text>Sobre</Text>
        </Button>
      </View>



      <Button onPress={() => navigation.navigate('Login')}>
        <Text>Sair</Text>
      </Button>

    </Container>
  );
}
