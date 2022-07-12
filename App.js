import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as firebase from "firebase";
import {firebaseConfig} from "./config";

import Home from "./screens/Home";
import Poem from "./screens/Poem";
import Quiz1 from "./screens/Quiz1";
import Result from "./screens/Result"

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Poem" component={Poem} />
        <Stack.Screen name="Quiz1" component={Quiz1} />
        <Stack.Screen name="Result" component={Result} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


