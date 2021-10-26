import { BorderlessButton } from 'react-native-gesture-handler';
import Entypo from 'react-native-vector-icons/Entypo';
import styled from 'styled-components/native';

export const Button = styled(BorderlessButton).attrs({
  hitSlop: 20
})``;

export const ArrowLeft = styled(Entypo).attrs((props) => {
  return {
    color: props.theme.colors.white300,
    name: 'back',
    size: 22,
  }
})``;
