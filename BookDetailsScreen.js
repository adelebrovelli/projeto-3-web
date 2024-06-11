import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import { AuthContext } from '../context/AuthContext'; // Importando o AuthContext

const BookDetailsScreen = ({ route, navigation }) => {
  const { title, author, imageUrl } = route.params;
  const { isLoggedIn } = useContext(AuthContext); // Obtendo o estado de login do contexto

  const handleRent = () => {
    if (isLoggedIn) {
      alert('Livro alugado com sucesso!');
    } else {
      navigation.navigate('Log-in');
    }
  };

  const handleBuy = () => {
    if (isLoggedIn) {
      alert('Livro comprado com sucesso!');
    } else {
      navigation.navigate('Log-in');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.bookImage} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.author}>{author}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Alugar" onPress={handleRent} />
        <Button title="Comprar" onPress={handleBuy} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FAF3E0',
    alignItems: 'center',
  },
  bookImage: {
    width: 150,
    height: 225,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  author: {
    fontSize: 18,
    color: '#555',
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
});

export default BookDetailsScreen;
