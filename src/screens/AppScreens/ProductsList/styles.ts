import styled from 'styled-components/native';
import { Pressable } from 'react-native';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.white200};
  justify-content: center;
  padding-top: 18px;
  flex: 1;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Ubuntu.BoldItalic};
  color: ${({ theme }) => theme.colors.secondary};
`;

export const ProductList = styled.FlatList.attrs({
  numColumns: 2,
  contentContainerStyle: {
    paddingBottom: 10,
  }
})`
  flex: 1;
`;

export const OrderLabel = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Ubuntu.Regular};
  color: ${({ theme }) => theme.colors.dark200};
  letter-spacing: 2px;
  margin-left: 10px;
  font-size: 18px;
`;

export const OrderOptions = styled.View`
  flex-direction: row;
  margin: 10px 0 12px;
`;

export const OrderOption = styled(Pressable)`
  flex-direction: row;
  align-items: center;
  margin-left: 12px;
`;

export const OrderOptionLabel = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Ubuntu.Regular};
  color: ${({ theme }) => theme.colors.dark200};
  font-size: 16px;
`;

export const OrderOptionRadioButton = styled.View`
  justify-content: center;
  border-radius: 18px;
  align-items: center;
  margin-right: 6px;
  border-width: 1px;
  border-color: red;
  height: 16px;
  width: 16px;
`;

export const OrderOptionRadioButtonSelected = styled.View`
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 18px;
  border-color: red;
  height: 8px;
  width: 8px;
`;