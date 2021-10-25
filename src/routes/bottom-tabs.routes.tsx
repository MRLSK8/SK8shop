import React, { useContext, useState } from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ThemeContext } from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';

import { useAppSelector } from '~/hooks/reduxHooks';
import MyPurchasesStack from './purchases.routes';
import ProductsStack from './products.routes';

import {
  CartQuantityLabel,
  CartQuantity,
  MenuButton,
  CartButton,
} from './styles';

const { Navigator, Screen } = createBottomTabNavigator();

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      ProductsStack: string;
      MyPurchasesStack: string;
    }
  }
}

export default function BottomTabStack({ navigation }: any) {
  const cartQuantity = useAppSelector(state => state.cart.products.length);
  const { colors, fonts } = useContext(ThemeContext);

  return (
    <Navigator
      initialRouteName="ProductsStack"
      screenOptions={{
        headerShown: true,
        headerTitleAlign: 'center',
        tabBarActiveTintColor: colors.secondary,
        tabBarInactiveTintColor: colors.white200,
        tabBarStyle: {
          backgroundColor: colors.dark100,
          borderTopWidth: 0,
          elevation: 0,
          padding: 16,
          height: 70,
        },
        tabBarLabelStyle: {
          fontFamily: fonts.Ubuntu.Regular,
          textAlign: 'center',
          letterSpacing: 0,
          marginBottom: 8,
          lineHeight: 15,
          marginTop: 4,
          fontSize: 14,
        },
        headerStyle: {
          backgroundColor: colors.dark100,
          elevation: 0,
        },
        headerLeft: () => (
          <MenuButton onPress={() => navigation.openDrawer()}>
            <Entypo
              size={32}
              name={'menu'}
              color={colors.white200}
            />
          </MenuButton>
        ),
        headerRight: () => (
          <CartButton onPress={() => navigation.navigate('ShoppingCart')}>
            <Ionicons
              size={28}
              name={'ios-cart-outline'}
              color={colors.white200}
            />
            <CartQuantity withPlus={cartQuantity > 99}>
              <CartQuantityLabel>
                {cartQuantity > 99 ? '99+' : cartQuantity}
              </CartQuantityLabel>
            </CartQuantity>
          </CartButton>
        )
      }}
    >
      <Screen
        name="ProductsStack"
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) =>
            <Feather
              size={22}
              name={'home'}
              color={color}
            />
        }}
        component={ProductsStack}
      />
      <Screen
        name="MyPurchasesStack"
        options={{
          tabBarLabel: 'Meus Pedidos',
          tabBarIcon: ({ color }) =>
            <Ionicons
              size={26}
              name={'list-outline'}
              color={color}
            />
          ,
        }}
        component={MyPurchasesStack}
      />

    </Navigator>
  );
};
