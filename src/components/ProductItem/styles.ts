import styled, { css } from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';
import Animated from 'react-native-reanimated';

const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity);

const borderTop = css`
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
`;

export const Container = styled(AnimatedTouchableOpacity).attrs({
	activeOpacity: 0.7
})`
  background-color: ${({ theme }) => theme.colors.backgroundSupport};
  padding-bottom: 12px;
  align-items: center;
  border-radius: 8px;
  margin: 10px;
  width: 90%;
`;

export const Image = styled(FastImage).attrs({
	resizeMode: 'cover'
})`
  height: 100px;
  ${borderTop}
  width: 100%;
`;

export const Title = styled.Text.attrs({
	numberOfLines: 1
})`
  font-family: ${({ theme }) => theme.fonts.Ubuntu.Regular};
  color: ${({ theme }) => theme.colors.dark3};
  text-transform: capitalize;
  margin: 12px 6px 0;
  font-size: 14px;
`;

export const ProductPrice = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Ubuntu.Regular};
  color: ${({ theme }) => theme.colors.dark3};
  font-size: 12px;
`;

export const PriceWrapper = styled.View`
  flex-direction: row;
  margin-top: 8px;
`;

export const PreviousProductPrice = styled(ProductPrice)`
  font-family: ${({ theme }) => theme.fonts.Ubuntu.Italic};
  color: ${({ theme }) => theme.colors.dark3};
  text-decoration: line-through;
  padding: 0 2px;
`;
