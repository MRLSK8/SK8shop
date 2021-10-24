import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.white};
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.black};
`;