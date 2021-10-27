import React, { useCallback } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';

import {
  PaperIconButton,
  ImageZoomable,
  CompressIcon,
  Container,
  Image,
} from './styles';

const ImagePreview: React.FC = () => {
  const imageUri = useRoute<any>().params?.imageUri;
  const { goBack } = useNavigation();

  const closePreview = useCallback(() => {
    goBack();
  }, []);

  return (
    <Container>
      <ImageZoomable >
        <Image source={{ uri: imageUri }} />
      </ImageZoomable>

      <PaperIconButton
        icon={(props: any) => <CompressIcon  {...props} />}
        onPress={closePreview}
      />
    </Container>
  );
};

export default ImagePreview;
