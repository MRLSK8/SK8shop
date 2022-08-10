import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const SignUpButton = styled.TouchableOpacity.attrs({
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

export const SignUpButtonLabel = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Ubuntu.Regular};
  color: ${({ theme }) => theme.colors.white100};
  text-transform: uppercase;
  letter-spacing: 1px;
`;