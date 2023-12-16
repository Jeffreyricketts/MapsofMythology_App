import React, {Component} from 'react-native';
import {StyleSheet, Text, View} from 'react-native';
import styles from './component/Style';

import HomeScreen from './Screens/HomeScreen';
import MapScreen from './Screens/MapScreen';
import CodexScreen from './Screens/CodexScreen';
import THDionysusScreen from './Screens/THDionysusScreen';
import ParthenonScreen from './Screens/ParthenonScreen';
import TPApolloScreen from './Screens/TPApolloScreen';
import TPZeusScreen from './Screens/TPZeusScreen';
import SpartaScreen from './Screens/SpartaScreen';
import KnossosCreteScreen from './Screens/KnossosCreteScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


const MapTest = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Map"
          component={MapScreen}
          options={{
            headerShown: true,
            headerTransparent: true,
            headerTintColor: 'black',
          }}
        />
        <Stack.Screen
          name="Codex"
          component={CodexScreen}
          options={{
            headerShown: true,
            headerTransparent: true,
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name="Theatre of Dionysus"
          component={THDionysusScreen}
          options={{
            headerShown: true,
            headerTransparent: true,
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name="The Parthenon"
          component={ParthenonScreen}
          options={{
            headerShown: true,
            headerTransparent: true,
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name="Temple of Apollo"
          component={TPApolloScreen}
          options={{
            headerShown: true,
            headerTransparent: true,
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name="Temple of Zeus"
          component={TPZeusScreen}
          options={{
            headerShown: true,
            headerTransparent: true,
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name="Sparta"
          component={SpartaScreen}
          options={{
            headerShown: true,
            headerTransparent: true,
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name="Knossos"
          component={KnossosCreteScreen}
          options={{
            headerShown: true,
            headerTransparent: true,
            headerTintColor: 'white',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MapTest;
