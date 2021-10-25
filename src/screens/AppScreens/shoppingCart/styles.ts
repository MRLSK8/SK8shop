import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.white200};
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Ubuntu.BoldItalic};
  color: ${({ theme }) => theme.colors.secondary};
`;