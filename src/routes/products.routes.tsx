import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import productDetails from '~/screens/AppScreens/productDetails';
import productsList from '~/screens/AppScreens/productsList';
import shoppingCart from '~/screens/AppScreens/shoppingCart';

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
      <Screen name="Products" component={productsList} />
      <Screen name="ShoppingCart" component={shoppingCart} />
      <Screen name="ProductsDetails" component={productDetails} />
    </Navigator>
  );
}
