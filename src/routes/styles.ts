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
  margin-left: 14px;
`;

export const CartButton = styled(Pressable).attrs({
  hitSlop: 20
})`
  margin-right: 24px;
  position: relative;
`;

export const CartQuantity = styled.View<{ withPlus?: boolean }>`
  background-color: ${({ theme }) => theme.colors.secondary};
  height: ${props => props.withPlus ? 18 : 16}px;
  width: ${props => props.withPlus ? 18 : 16}px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  position: absolute;
  right: -5px;
  top: -3px;
`;

export const CartQuantityLabel = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Ubuntu.Regular};
  color: ${({ theme }) => theme.colors.white};
  font-size: 10px;
`;