import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LogIn from '~/screens/AuthScreens/signIn';

import SignUp from '~/screens/AuthScreens/signUp';

const { Screen, Navigator } = createNativeStackNavigator();

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      LogIn: string;
      SignUp: string;
    }
  }
}

export default function AuthStack() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }
      }
      initialRouteName="LogIn"
    >
      <Screen
        name="LogIn"
        component={LogIn}
      />

      <Screen
        name="SignUp"
        component={SignUp}
      />
    </Navigator>
  );
}
