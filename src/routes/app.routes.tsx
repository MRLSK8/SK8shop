import React, { useContext } from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import { ThemeContext } from 'styled-components/native';

import {
  createDrawerNavigator,
} from '@react-navigation/drawer';

import { logout } from '~/store/actions/auth/auth.actions';
import { useAppDispatch } from '~/hooks/reduxHooks';
import BottomTab from './bottom-tabs.routes';

import {
  DrawerItemWrapperLogOut,
  DrawerContentContainer,
  DrawerItemWrapper,
} from './styles';

const { Navigator, Screen } = createDrawerNavigator();

export default function DrawerStack() {
  return (
    <Navigator
      initialRouteName="Feed"
      screenOptions={{
        headerShown: false
      }}
      drawerContent={props => <DrawerContent {...props} />}
    >
      <Screen
        name="Feed"
        component={BottomTab}
      />
    </Navigator >
  );
}

const DrawerContent: React.FC<any> = props => {
  const { colors } = useContext(ThemeContext);
  const { reset, navigate } = useNavigation();
  const dispatch = useAppDispatch();

  const handleLogOut = () => {
    dispatch(logout());

    reset({
      index: 0,
      routes: [{
        name: 'AuthStack'
      }]
    });
  }

  const handleNavigation = (stack: string, deepStack?: any) => {
    if (deepStack) {
      // @ts-ignore
      navigate(stack, deepStack);
    } else {
      // @ts-ignore
      navigate(stack);
    }
  }

  return (
    <>
      <DrawerContentContainer {...props}>
        <DrawerItemWrapper
          label={'Home'}
          style={{
            marginTop: 8
          }}
          icon={() =>
            <Feather
              size={22}
              name={'home'}
              color={colors.white200}
            />
          }
          onPress={() =>
            handleNavigation(
              'ProductsStack',
              { screen: 'Products' }
            )}
        />

        <DrawerItemWrapper
          label={'Meus Pedidos'}
          style={{
            marginTop: 8
          }}
          icon={() =>
            <Ionicons
              size={22}
              name={'list-outline'}
              color={colors.white200}
            />
          }
          onPress={() =>
            handleNavigation('MyPurchasesStack')}
        />

        <DrawerItemWrapperLogOut
          label={'Sair'}
          icon={() =>
            <Feather
              size={22}
              name={'log-out'}
              color={colors.secondary}
            />
          }
          onPress={handleLogOut}
        />
      </DrawerContentContainer>
    </>
  );
};
