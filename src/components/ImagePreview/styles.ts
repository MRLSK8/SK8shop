import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { StyleSheet, Dimensions } from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';
import { IconButton } from 'react-native-paper';
import FastImage from 'react-native-fast-image';
import styled from 'styled-components/native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

export const styles = StyleSheet.create({
  fab: {},
});

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.dark};
  flex: 1;
`;

export const Image = styled(FastImage).attrs({
  resizeMode: 'contain'
})`
  width: ${SCREEN_WIDTH}px;
  height:  ${SCREEN_HEIGHT}px;
`;

export const ImageZoomable = styled(ImageZoom).attrs({
  cropWidth: SCREEN_WIDTH,
  cropHeight: SCREEN_HEIGHT,
  imageWidth: SCREEN_WIDTH,
  imageHeight: SCREEN_HEIGHT,
})``;

export const CompressIcon = styled(FontAwesome5).attrs(props => {
  return {
    color: props.theme.colors.white200,
    name: 'compress',
    size: 20,
  }
})``;

export const PaperIconButton = styled(IconButton).attrs(props => {
  return {
    color: props.theme.colors.white200,
    tvParallaxProperties: false,
    hasTVPreferredFocus: false,
    size: 24,
  }
})`
  position: absolute;
  bottom: 16px;
  right: 14px;
`;