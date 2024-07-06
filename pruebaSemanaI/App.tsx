import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import RegistrosScreen from './screens/RegistrosScreen';
import MostrarRegistro from './screens/MostrarRegistro';
import MostrarApi from './screens/MostrarApi';
import Navigator from './navigation/MainNavigation';

export default function App() {
  return (
    <Navigator/>
  );
}
