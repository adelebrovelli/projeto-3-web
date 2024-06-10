import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <TouchableOpacity onPress={() => navigation.navigate('LibraryScreen')}>
        <Text style={styles.headerText}>Biblioteca</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#8B0000',
    padding: 30,
  },
  logo: {
    width: 210,
    height: 50,
    marginTop: 25,
    resizeMode: 'contain',
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    marginTop: 25,
    marginLeft: 10,
    fontFamily: 'Cinzel-Regular'
  },
});

export default Header;
