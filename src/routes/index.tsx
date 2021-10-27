import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { useAppSelector } from '~/hooks/reduxHooks';
import AuthStack from './auth.routes';
import AppStack from './app.routes';

const { Screen, Navigator } = createNativeStackNavigator();

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      AppStack: string;
      AuthStack: string;
    }
  }
}

export default function Routes() {
  const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated);

  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName={true ? "AppStack" : "AuthStack"}
      >
        <Screen name="AppStack" component={AppStack} />
        <Screen name="AuthStack" component={AuthStack} />
      </Navigator>
    </NavigationContainer>
  );
}

