import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import RegistrosScreen from './screens/RegistrosScreen';
import MostrarRegistro from './screens/MostrarRegistro';

export default function App() {
  return (
    <MostrarRegistro/>
  );
}
