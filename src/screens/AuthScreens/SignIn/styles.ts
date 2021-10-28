import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.white};
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.dark};
`;

export const SignInButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7
})`
  background-color: ${(props) => props.theme.colors.primary};
  justify-content: center;
  align-items: center;
  align-self: center;
  border-radius: 6px;
  padding: 0 14px;
  height: 48px;
  width: 80%;
`;

export const SignInButtonLabel = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Ubuntu.Regular};
  color: ${({ theme }) => theme.colors.white100};
  text-transform: uppercase;
  letter-spacing: 1px;
`;