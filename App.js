import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, StyleSheet } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import LibraryScreen from './screens/LibraryScreen';
import HomeScreen from './screens/HomeScreen';
import Header from './components/Header';

const loadFonts = () => {
  return Font.loadAsync({
    'Cinzel-Regular': require('./assets/fonts/Cinzel-Regular.otf'),
  });
};


export default function App() {
  const Stack = createStackNavigator();
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (!fontsLoaded) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={console.warn}
      />

  );
}


  return(
  <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: () => <Header />
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="LibraryScreen" component={LibraryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
);

}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
