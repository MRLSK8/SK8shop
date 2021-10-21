import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Skateboard from '~/assets/icons/skateboard.svg';

import MyPurchasesStack from './purchases.routes';
import ProductsStack from './products.routes';

const { Navigator, Screen } = createBottomTabNavigator();

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      ProductsStack: string;
      MyPurchasesStack: string;
    }
  }
}

export default function BottomTabStack() {
  return (
    <Navigator
      initialRouteName="ProductsStack"
      screenOptions={{
        headerShown: false,
        headerTitleAlign: 'center',
        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: '#f15fdd',
        tabBarStyle: {
          height: 60,
          padding: 20,
          backgroundColor: '#6f5fff',
        },
        tabBarLabelStyle: {
          // fontFamily: fonts.Montserrat.Bold700,
          textAlign: 'center',
          letterSpacing: 0,
          marginBottom: 8,
          lineHeight: 15,
          marginTop: 12,
          fontSize: 12,
        },
      }}
    >
      <Screen
        name="ProductsStack"
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => <Skateboard fill={color} />
        }}
        component={ProductsStack}
      />
      <Screen
        name="MyPurchasesStack"
        options={{
          tabBarLabel: 'Minhas compras',
          tabBarIcon: ({ color }) => <Skateboard fill={color} />,
        }}
        component={MyPurchasesStack}
      />

    </Navigator>
  );
};
