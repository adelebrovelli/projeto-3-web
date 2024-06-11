import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const books = [
  { id: '1', title: 'Compilers: Principles, techniques and tools', author: ' Alfred V. Aho, Ravi Sethi, Jeffrey D. Ullman ', imageUrl: 'https://m.media-amazon.com/images/I/51qOYA71kkL._AC_UF1000,1000_QL80_.jpg' },
  { id: '2', title: 'C++ How to program', author: 'Paul Deitel, Harvey Deitel', imageUrl: 'https://m.media-amazon.com/images/I/41oRsXdl2lL._AC_UF1000,1000_QL80_.jpg' },
  { id: '3', title: 'Java How to Program', author: 'Paul Deitel, Harvey Deitel', imageUrl: 'https://m.media-amazon.com/images/I/51JNAlg32ZL._AC_UF1000,1000_QL80_.jpg' },
  { id: '4', title: 'Algorithms in a Nutshell', author: 'George T. Heineman, Gary Police & Stanley Selkow', imageUrl: 'https://m.media-amazon.com/images/I/61p8Z0x7JAS._AC_UF894,1000_QL80_.jpg' },
  { id: '5', title: 'Álgebra Linear', author: 'Boldrini/Costa', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbrrdkR8pfInRhrJ-Wt9aqbRUNAK-e_RIGSV3y5-k0V01GC8zbp5d4o5om3UHt_gwE5y8&usqp=CAU' },
  { id: '6', title: 'Clean Code: A Handbook of Agile Software Craftsmanship', author: ' Robert C. Martin, Dean Wampler', imageUrl: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQEWP_zBWo6HdMi7-3eelJbIotTVWDqOHeJ5mhZIIDdLRVjrxH6MTydAzEIJ4w&usqp=CAE' },
  { id: '7', title: 'Usability Engineering', author: 'Jakob Niesen', imageUrl: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTkLG5NHusUrtOu9K14Xq4lOsiCKhyvK4a42phNjV7nACxeFz3Lr2j-AZxXhg&usqp=CAE' },
  // Adicione mais livros aqui
];

const BookItem = ({ title, author, imageUrl }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('BookDetails', { title, author, imageUrl })}>
      <View style={styles.bookItem}>
        <Image source={{ uri: imageUrl }} style={styles.bookImage} />
        <View style={styles.bookInfo}>
          <Text style={styles.bookTitle}>{title}</Text>
          <Text style={styles.bookAuthor}>{author}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const LibraryBooks = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Biblioteca</Text>
      <FlatList
        data={books}
        renderItem={({ item }) => <BookItem title={item.title} author={item.author} imageUrl={item.imageUrl} />}
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
    flexDirection: 'row',
    marginBottom: 15,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
  },
  bookImage: {
    width: 50,
    height: 75,
    marginRight: 10,
    borderRadius: 4,
  },
  bookInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  bookTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  bookAuthor: {
    fontSize: 16,
    color: '#555',
  },
});

export default LibraryBooks;
