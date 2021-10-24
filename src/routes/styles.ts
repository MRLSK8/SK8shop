import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { BorderlessButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import { Pressable } from 'react-native';

export const Button = styled(BorderlessButton).attrs({
  hitSlop: 20
})`
  padding: 18px;
 `;

export const ArrowLeft = styled(SimpleLineIcons).attrs({
  name: 'arrow-left',
  color: '#66ffd6',
  size: 18,
})``;


import {
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';


export const DrawerContentContainer = styled(DrawerContentScrollView).attrs({
  showsVerticalScrollIndicator: false
})`
  background-color: ${({ theme }) => theme.colors.dark100};
  padding-top: 48px;
`;

export const DrawerItemWrapper = styled(DrawerItem).attrs((props) => {
  return {
    labelStyle: {
      textAlign: "left",
      fontFamily: props.theme.fonts.Ubuntu.Regular,
      color: props.theme.colors.white200,
      letterSpacing: 0,
      lineHeight: 21,
      fontSize: 16,
      right: 22,
    }
  }
})``;

export const DrawerItemWrapperLogOut = styled(DrawerItemWrapper).attrs((props) => {
  return {
    labelStyle: {
      color: props.theme.colors.secondary,
      right: 22,
    }
  }
})``;

export const DrawerHeader = styled.View`
  margin-bottom: 12px;
  padding: 0 24px;
  width: 100%;
`;

export const MenuButton = styled(Pressable).attrs({
  hitSlop: 20
})`
  padding-left: 24px;
`;