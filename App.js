import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ flex: 0.4, alignItems: 'center', justifyContent: 'space-evenly' }}>

        <TextInput placeholder='Digite seu email' style={styles.input} placeholderTextColor='#dbdbdb'></TextInput>
        <TextInput placeholder='Digite sua senha' style={styles.input} placeholderTextColor='#dbdbdb'></TextInput>

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity>
            <LinearGradient
              colors={['#9bed98', '#000']}
              style={{ width: 130, padding: 15, alignItems: 'center', borderRadius: 13, marginRight: 5 }}>
              <Text style={styles.button_text}>
                Login
            </Text>
            </LinearGradient>
          </TouchableOpacity>


          <TouchableOpacity>
            <LinearGradient
              colors={['#9bed98', '#000']}
              style={{ width: 130, padding: 15, alignItems: 'center', borderRadius: 13 }}>
              <Text style={styles.button_text}>
                Cadastre-se
            </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        <TouchableOpacity>
          <LinearGradient
            colors={['#b5d9f5', '#000']}
            style={{ width: 130, padding: 15, alignItems: 'center', borderRadius: 13 }}>
            <Text style={styles.button_text} >
              Home
            </Text>
          </LinearGradient>
        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#dbdbdb',
    fontSize: 25,
  },
  button_text: {
    backgroundColor: 'transparent',
    fontSize: 15,
    color: '#dbdbdb',
  }
});
