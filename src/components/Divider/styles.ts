import styled from 'styled-components/native';

export const Container = styled.View<{ containerWidth?: number, marginVertical?: number }>`
  margin: ${props => props.marginVertical ?? 0}px 0;
  width: ${props => props.containerWidth ?? 100}%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 24px;
`;

export const DividerView = styled.View`
  border-color: ${({ theme }) => theme.colors.dark2};
  border-bottom-width: 0.6px;
  flex: 1;
`;

export const DividerText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Ubuntu.Regular};
  padding: 0 16px;
  font-size: 18px;
  color: red;
`;
