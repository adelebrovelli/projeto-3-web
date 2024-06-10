import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LibraryBooks from '../components/LibraryBooks';

const LibraryScreen = () => {
  return (
    <View style={styles.container}>
      <LibraryBooks />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FAF3E0',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default LibraryScreen;
