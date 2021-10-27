import Ionicons from 'react-native-vector-icons/Ionicons';
import FastImage from 'react-native-fast-image';
import styled from 'styled-components/native';
import { Pressable } from 'react-native';

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Ubuntu.BoldItalic};
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 18px;
  margin: 12px;
`;

export const Image = styled(FastImage).attrs({
  resizeMode: 'cover'
})`
  border-radius: 8px;
  height: 100%;
  width: 120px;
`;

export const ProductName = styled.Text.attrs({
  numberOfLines: 1
})`
  font-family: ${({ theme }) => theme.fonts.Ubuntu.Bold};
  color: ${({ theme }) => theme.colors.dark200};
  text-transform: capitalize;
  font-size: 16px;
`;

export const ContentWrapper = styled.View`
  padding: 8px 0 12px 0;
  margin: 0 8px 0 12px;
  flex: 1;
`;

export const Description = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-family: ${({ theme }) => theme.fonts.Ubuntu.Regular};
  color: ${({ theme }) => theme.colors.dark200};
  line-height: 20px;
  margin-top: 8px;
  font-size: 14px;
`;

export const RemoveItemButton = styled(Pressable).attrs({
  hitslop: 30
})`
  justify-content: center;
  flex-direction: row;
  align-items: center;
  padding: 8px;
`;

export const Product = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7
})`
  background-color: ${({ theme }) => theme.colors.white};
  flex-direction: row;
  border-radius: 8px;
  margin: 10px 8px;
  flex: 1;
`;

export const ProductPrice = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Ubuntu.Regular};
  color: ${({ theme }) => theme.colors.dark200};
  font-size: 12px;
`;

export const PreviousProductPrice = styled(ProductPrice)`
  font-family: ${({ theme }) => theme.fonts.Ubuntu.Italic};
  color: ${({ theme }) => theme.colors.white300};
  text-decoration: line-through;
  padding: 0 2px;
`;

export const TrashCanIcon = styled(Ionicons).attrs(props => {
  return {
    color: props.theme.colors.secondary,
    name: 'trash-outline',
    size: 16,
  }
})``;

export const PriceWrapper = styled.View`
  flex-direction: row;
  margin-top: 8px;
`;

export const PurchaseHeader = styled.View`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding-right: 8px;
`;

export const EmptyPurchasesLabel = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Ubuntu.BoldItalic};
  color: ${({ theme }) => theme.colors.dark100};
  align-self: center;
  margin-top: 120px;
  font-size: 22px;
`;