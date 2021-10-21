import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import productDetails from '~/screens/AppScreens/productDetails';

const { Screen, Navigator } = createNativeStackNavigator();

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Products: string;
      ProductsDetails: string;
    }
  }
}

export default function PurchasesStack() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false
      }}
      initialRouteName="Products"
    >
      <Screen name="Products" component={productDetails} />
      <Screen name="ProductsDetails" component={productDetails} />
    </Navigator>
  );
}
