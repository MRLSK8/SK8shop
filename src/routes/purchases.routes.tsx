import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import myPurchases from '~/screens/AppScreens/MyPurchases';

const { Screen, Navigator } = createNativeStackNavigator();

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Purchases: string;
    }
  }
}

export default function PurchasesStack() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false
      }}
      initialRouteName="Purchases"
    >
      <Screen name="Purchases" component={myPurchases} />
    </Navigator>
  );
}
