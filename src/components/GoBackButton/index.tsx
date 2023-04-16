import React from 'react';

import { useNavigation } from '@react-navigation/native';

import * as S from './styles';

const GoBackButton: React.FC = () => {
  const { canGoBack, goBack } = useNavigation();

  const handleGoBack = () => {
    if (canGoBack()) goBack();
  }

  return (
    <S.Button onPress={handleGoBack}>
      <S.ArrowLeft />
    </S.Button>
  );
};

export default GoBackButton;
