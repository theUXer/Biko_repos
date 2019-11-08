import React from 'react';
import { View, Dimensions, TouchableOpacity, Text } from 'react-native';
import { bikoColor } from '../../helpers/Colors'
import DrawerLayout from 'react-native-gesture-handler/DrawerLayout';
import { setRecoveryProps } from 'expo/build/ErrorRecovery/ErrorRecovery';

// import Icon from 'react-native-vector-icons/MaterialIcons'
// import { Icon } from 'native-base';
// import { white } from 'ansi-colors';

const { width, height } = Dimensions.get('screen')

export default function Drawer({ navigation }) {

  
  return (

    <View style={{ flex: 1, justifyContent: 'space-between', 
    backgroundColor: '#101056'  }}>
     <View style={{
       
       width: 280,
       
       backgroundColor: '#101056'
     }}>
       <TouchableOpacity style={{ marginTop: 20, width: 280, height: 50, backgroundColor: 'white' }}
         onPress={() => navigation.navigate('Perfil')}>
         <Text style={{ color: bikoColor.primary, fontSize: 18, paddingLeft: 15, marginTop: 10 }}>
           Perfil
         </Text>
       </TouchableOpacity>

       <TouchableOpacity style={{ marginTop: 5, width: 280, height: 50, backgroundColor: bikoColor.primary }}
         onPress={() => navigation.navigate('Info')}>
         <Text style={{ color: 'white', fontSize: 18, paddingLeft: 15, marginTop: 10 }}>
           Sobre
         </Text>
       </TouchableOpacity>

       
     </View>

  

      <TouchableOpacity style={{ width: 280, height: 50 }}
         onPress={() => navigation.navigate('Login')}>
         <Text style={{ color: 'white', fontSize: 18, paddingLeft: 15, textAlign: 'center' }}>
           Sair
         </Text>
       </TouchableOpacity>

     </View>
  );
}
