import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const books = [
  { id: '1', title: 'Compilers: Principles, techniques and tools', author: 'Autor 1' },
  { id: '2', title: 'C++ How to program', author: 'Autor 2' },
  { id: '3', title: 'Java how to program', author: 'Autor 3' },
  { id: '4', title: 'Algorithms in a Nutshell', author: 'Autor 4' },
  // Adicione mais livros aqui
];

const BookItem = ({ title, author }) => (
  <View style={styles.bookItem}>
    <Text style={styles.bookTitle}>{title}</Text>
    <Text style={styles.bookAuthor}>{author}</Text>
  </View>
);

const LibraryBooks = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Biblioteca</Text>
      <FlatList
        data={books}
        renderItem={({ item }) => <BookItem title={item.title} author={item.author} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
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
    fontFamily: 'Cinzel-Regular',
    marginBottom: 10,
  },
  list: {
    paddingBottom: 20,
  },
  bookItem: {
    marginBottom: 15,
  },
  bookTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  bookAuthor: {
    fontSize: 16,
  },
});

export default LibraryBooks;
