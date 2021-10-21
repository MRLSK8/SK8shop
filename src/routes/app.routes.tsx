import React from 'react';
import { Text } from 'react-native';

import {
  createDrawerNavigator,
} from '@react-navigation/drawer';

import Skateboard from '~/assets/icons/skateboard.svg';
import BottomTab from './bottom-tabs.routes';

import {
  DrawerItemWrapperLogOut,
  DrawerContentContainer,
  DrawerItemWrapper,
  DrawerHeader,
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

  return (
    <>
      <DrawerContentContainer {...props}>
        <DrawerHeader>
          <Text>
            Header
          </Text>
        </DrawerHeader>

        <DrawerItemWrapper
          label={'Feed'}
          style={{
            marginTop: 8
          }}
          icon={() =>
            <Skateboard fill={'#f15f55'} />
          }
          onPress={() => { }}
        />

        <DrawerItemWrapperLogOut
          label={'Log out'}
          icon={() =>
            <Skateboard fill={'#d5df55'} />
          }
          onPress={() => { }}
        />
      </DrawerContentContainer>
    </>
  );
};
