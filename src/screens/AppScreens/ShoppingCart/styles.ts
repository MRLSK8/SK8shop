import Ionicons from 'react-native-vector-icons/Ionicons';
import FastImage from 'react-native-fast-image';
import styled from 'styled-components/native';

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Ubuntu.BoldItalic};
  color: ${({ theme }) => theme.colors.secondary};
  margin: 8px 0 8px 22px;
  font-size: 22px;
`;

export const FinishPurchaseButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7
}) <{ disabled: boolean }>`
  background-color: ${(props) => props.disabled ? props.theme.colors.white300 : props.theme.colors.tertiary};
  opacity: ${(props) => props.disabled ? 0.6 : 1};
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

export const FinishPurchaseButtonLabel = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Ubuntu.Regular};
  color: ${({ theme }) => theme.colors.white100};
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-right: 8px;
`;

export const TotalValue = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Ubuntu.Bold};
  color: ${({ theme }) => theme.colors.dark200};
  margin: 18px 0 0 22px;
  font-size: 22px;
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

export const ProductName = styled.Text.attrs({
  numberOfLines: 1
})`
  font-family: ${({ theme }) => theme.fonts.Ubuntu.Bold};
  color: ${({ theme }) => theme.colors.dark200};
  text-transform: capitalize;
  font-size: 16px;
`;

export const Image = styled(FastImage).attrs({
  resizeMode: 'cover'
})`
  border-radius: 8px;
  height: 100%;
  width: 120px;
`;

export const ContentWrapper = styled.View`
  margin: 0 8px 0 12px;
  padding-top: 16px;
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

export const RemoveItemButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7
})`
  justify-content: center;
  flex-direction: row;
  align-items: center;
  margin: 6px 0;
  padding: 8px;
  width: 100%;
`;

export const RemoveItemButtonLabel = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Ubuntu.Regular};
  color: ${({ theme }) => theme.colors.secondary};
  align-self: center;
  margin-top: 4px;
`;

export const EmptyCartLabel = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Ubuntu.BoldItalic};
  color: ${({ theme }) => theme.colors.dark100};
  margin: 64px 0 64px 22px;
  align-self: center;
  font-size: 22px;
`;

export const ProductPrice = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Ubuntu.Regular};
  color: ${({ theme }) => theme.colors.dark200};
  font-size: 12px;
`;

export const PriceWrapper = styled.View`
  flex-direction: row;
  margin-top: 8px;
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
})`
  margin-right: 8px;
  margin-top: 4px;
`;

export const NumberOfItems = styled(ProductName)``;