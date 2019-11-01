import React, { useEffect } from 'react';
import { View, Dimensions, TouchableOpacity } from 'react-native';

const { width, height } = Dimensions.get('screen')

export default function Drawer({ navigation }) {

  return (
    <View style={{
        width: width/2,
        height,
        backgroundColor: 'white'
    }}>
      <TouchableOpacity style={{ paddingTop: 20, width: 280, height: 20, backgroundColor: 'white'}} onPress={() => navigation.navigate('Perfil')} />
    </View>
  );
}
