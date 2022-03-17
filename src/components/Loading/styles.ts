import styled from 'styled-components/native';
import { ActivityIndicator } from 'react-native-paper';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Loadingndicator = styled(ActivityIndicator).attrs((props) => {
  return {
    animating: true,
    color: props.theme.colors.secondary,
    size: "large"
  };
})``;