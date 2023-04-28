import styled from 'styled-components/native';
import { ActivityIndicator } from 'react-native-paper';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const Loadingndicator = styled(ActivityIndicator).attrs((props) => {
	return {
		animating: true,
		color: props.theme.colors.secondary,
		size: "large"
	};
})``;
