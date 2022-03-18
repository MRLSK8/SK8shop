import Ionicons from 'react-native-vector-icons/Ionicons';
import FastImage from 'react-native-fast-image';
import styled from 'styled-components/native';
import { Pressable } from 'react-native';

export const Image = styled(FastImage).attrs({
  resizeMode: 'cover'
})`
  height: 180px;
  width: 100%;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Ubuntu.Bold};
  color: ${({ theme }) => theme.colors.dark200};
  margin: 16px 0 14px 16px;
  letter-spacing: 2px;
  line-height: 28px;
  font-size: 26px;
`;

export const Description = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Ubuntu.Regular};
  color: ${({ theme }) => theme.colors.dark200};
  margin: 8px 0 8px 16px;
  line-height: 24px;
  font-size: 18px;
`;

export const AddToCartButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7
}) <{ isAlreadyInTheCart: boolean }>`
  background-color: ${(props) =>
    props.isAlreadyInTheCart ? props.theme.colors.tertiary : props.theme.colors.primary};
  justify-content: center;
  align-items: center;
  flex-direction: row;
  align-self: center;
  border-radius: 6px;
  margin-top: 48px;
  padding: 0 14px;
  height: 48px;
  width: 80%;
`;

export const AddToCartButtonLabel = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Ubuntu.Regular};
  color: ${({ theme }) => theme.colors.white100};
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-right: 8px;
`;

export const ShoppingCartIcon = styled(Ionicons).attrs(props => {
  return {
    color: props.theme.colors.white200,
    name: 'ios-cart-outline',
    size: 20,
  }
})``;

export const PreviousProductPrice = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Ubuntu.Italic};
  color: ${({ theme }) => theme.colors.white300};
  text-decoration: line-through;
  font-size: 20px;
`;

export const ProductPrice = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Ubuntu.Regular};
  color: ${({ theme }) => theme.colors.dark200};
  font-size: 32px;
`;

export const ImageButtonWrapper = styled(Pressable)``;

export const DescriptionWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const GoBackToProductListButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7
})`
  background-color: ${(props) => props.theme.colors.tertiary};
  justify-content: center;
  align-items: center;
  flex-direction: row;
  align-self: center;
  border-radius: 6px;
  margin-top: 32px;
  padding: 0 14px;
  height: 48px;
  width: 80%;
`;

export const GoBackToProductListButtonLabel = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Ubuntu.Regular};
  color: ${({ theme }) => theme.colors.white100};
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-right: 8px;
`;