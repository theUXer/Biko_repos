import React, { useEffect } from 'react';
import { View, Dimensions, TouchableOpacity, Text } from 'react-native';
import { white } from 'ansi-colors';

const { width, height } = Dimensions.get('screen')

export default function Drawer({ navigation }) {

  return (
    <View style={{
      width: width / 2,
      height,
      backgroundColor: '#101056'
    }}>
      <TouchableOpacity style={{ paddingTop: 20, width: 280, height: 20 }}
        onPress={() => navigation.navigate('Perfil')}>
        <Text style={{ color: 'white', justifyContent: 'center', alignItems: 'center', fontSize: 18 }}>
          Perfil
        </Text>
      </TouchableOpacity>
    </View>
  );
}
