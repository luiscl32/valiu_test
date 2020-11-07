import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {options} from './navigation-options';

import * as screen from './screen-components';

const Stack = createStackNavigator();

export default function Navigator() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={options} initialRouteName={'dashboard'}>
          <Stack.Screen
            component={screen.Dashboard}
            name={'dashboard'}
            options={{
              headerLeft: () => <></>,
              title: '',
            }}
          />

          <Stack.Screen component={screen.Second} name={'second'} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
