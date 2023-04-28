import styled from 'styled-components/native';

import { FlashList as FlatList } from "@shopify/flash-list";
import { Pressable } from 'react-native';

import { ProductProps } from '~/store/ducks/cart.reducer';
import { FlatListType } from '~/@types/types';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
  justify-content: center;
  padding-top: 18px;
  flex: 1;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Ubuntu.BoldItalic};
  color: ${({ theme }) => theme.colors.secondary};
`;

export const ProductList = styled(FlatList as FlatListType<ProductProps>).attrs({
	numColumns: 2,
	contentContainerStyle: {
		paddingBottom: 10,
	}
})``;

export const OrderLabel = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Ubuntu.Regular};
  color: ${({ theme }) => theme.colors.dark3};
  letter-spacing: 2px;
  margin-left: 10px;
  font-size: 20px;
`;

export const OrderOptions = styled.View`
  margin: 16px 10px 12px;
  flex-direction: row;
	gap: 12px;
`;

export const OrderOption = styled(Pressable)`
  flex-direction: row;
  align-items: center;
`;

export const OrderOptionLabel = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Ubuntu.Regular};
  color: ${({ theme }) => theme.colors.dark3};
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
