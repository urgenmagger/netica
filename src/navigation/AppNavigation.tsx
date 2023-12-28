import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  Main,
  FormsScreen,
  ResponsiveCardScreen,
  InfinityScrollScreen,
} from 'screens';
import { RootStackList, Screens } from './types';

const Stack = createNativeStackNavigator<RootStackList>();

export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <>
          <Stack.Screen name={Screens.Main} component={Main} />
          <Stack.Screen
            name={Screens.ResponsiveCardScreen}
            component={ResponsiveCardScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={Screens.InfinityScrollScreen}
            component={InfinityScrollScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={Screens.FormsScreen}
            component={FormsScreen}
            options={{ headerShown: false }}
          />
        </>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
