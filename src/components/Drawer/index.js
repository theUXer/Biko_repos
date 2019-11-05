import React from 'react';
import { View, Dimensions, TouchableOpacity, Text } from 'react-native';
import DrawerLayout from 'react-native-gesture-handler/DrawerLayout';

// import Icon from 'react-native-vector-icons/MaterialIcons'
// import { Icon } from 'native-base';
// import { white } from 'ansi-colors';

const { width, height } = Dimensions.get('screen')

export default function Drawer({ navigation }) {

  return (


     <View style={{
       flexDirection: 'row',
       width: 280,
       height,
       backgroundColor: '#101056'
     }}>
       <TouchableOpacity style={{ paddingTop: 20, width: 280, height: 20 }}
         onPress={() => navigation.navigate('Perfil')}>
         {/* <Icon name='Perfil' size={25} color='white'>
           <Text>Perfil</Text>
         </Icon> */}
         <Text style={{ color: 'white', fontSize: 18, paddingLeft: 15 }}>
           Perfil
         </Text>
       </TouchableOpacity>
     </View>
  );
}
