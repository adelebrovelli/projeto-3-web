import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import BookDetailsScreen from './screens/BookDetailsScreen';
import LibraryScreen from './screens/LibraryScreen';
import HomeScreen from './screens/HomeScreen';
import Header from './components/Header';
import CursosScreen from './screens/CursosScreen';
import EcommerceScreen from './screens/EcommerceScreen';
import LoginScreen from './screens/LoginScreen';
import { AuthProvider } from './context/AuthContext'; // Importando o AuthProvider

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

  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            header: () => <Header />
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Log-in" component={LoginScreen} />
          <Stack.Screen name="EcommerceScreen" component={EcommerceScreen} />
          <Stack.Screen name="CursosScreen" component={CursosScreen} />
          <Stack.Screen name="LibraryScreen" component={LibraryScreen} />
          <Stack.Screen name="BookDetails" component={BookDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}
