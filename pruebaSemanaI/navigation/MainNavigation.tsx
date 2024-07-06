import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RegistrosScreen from '../screens/RegistrosScreen';
import MostrarRegistro from '../screens/MostrarRegistro';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import MostrarApi from '../screens/MostrarApi';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Registro" component={RegistrosScreen} />
      <Tab.Screen name="MostrarRegistro" component={MostrarRegistro} />
      <Tab.Screen name='MostrarApi' component={MostrarApi}/>
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator >
      <Stack.Screen name="Welcome" component={WelcomeScreen}/>
      <Stack.Screen name='BottonTab' component={MyTabs} />
    </Stack.Navigator>
  );
}

export default function Navigator(){
  return(
      <NavigationContainer>
          <MyStack/>
      </NavigationContainer>
  )
}