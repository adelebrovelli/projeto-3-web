import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/library-logo.png')} style={styles.logo} resizeMode="contain" />
      <Text style={styles.description}>
        BEM-VINDO À NOSSA BIBLIOTECA! AQUI, É MUITO MAIS DO QUE UM DEPÓSITO DE LIVROS: É UM ESPAÇO DE DESCOBERTA, APRENDIZADO E COMUNIDADE.
      </Text>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FAF3E0',
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 290,  // Ajuste
    height: 250, // Ajuste
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#752a2a',
    marginVertical: 20,
    fontFamily: 'Cinzel-Regular',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
    fontFamily: 'Cinzel-Regular',
  },
});

export default HomeScreen;
