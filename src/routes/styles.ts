import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { BorderlessButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

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
  background-color: #156f5f;
`;

export const DrawerItemWrapper = styled(DrawerItem).attrs((props) => {
  return {
    labelStyle: {
      textAlign: "left",
      // fontFamily: props.theme.fonts.Montserrat.Medium500,
      color: "#6652f5",
      letterSpacing: 0,
      lineHeight: 21,
      fontSize: 16,
      right: 22,
    }
  }
})``;

export const DrawerItemWrapperLogOut = styled(DrawerItem).attrs((props) => {
  return {
    labelStyle: {
      textAlign: "left",
      // fontFamily: props.theme.fonts.Montserrat.Medium500,
      color: "#6F2555",
      letterSpacing: 0,
      lineHeight: 21,
      fontSize: 16,
      right: 22,
    }
  }
})``;

export const DrawerHeader = styled.View`
  margin-bottom: 12px;
  margin-top: -18px;
  padding: 0 24px;
  width: 100%;
`;
