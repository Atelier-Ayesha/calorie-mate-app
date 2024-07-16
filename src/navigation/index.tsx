import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BootSplash from 'react-native-bootsplash';
import MainScreen from '../screens/main';

export const Stack = createNativeStackNavigator();

export default function MainStack() {
  return (
    <NavigationContainer onReady={() => BootSplash.hide({fade: true})}>
      <Stack.Navigator initialRouteName="main">
        <Stack.Screen
          name="main"
          component={MainScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
