import { StatusBar } from 'expo-status-bar';
import { LogBox, StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { Archivo_400Regular, Archivo_700Bold, useFonts } from '@expo-google-fonts/archivo';
import { Poppins_400Regular, Poppins_600SemiBold} from '@expo-google-fonts/poppins';

LogBox.ignoreLogs(['expo-app-loading', '"requestPermissionsAsync()"'])

import Landing from './src/pages/Landing';

export default function App() {
  const [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <>
      <Landing />
      <StatusBar style='light' />
    </>
  );
}

