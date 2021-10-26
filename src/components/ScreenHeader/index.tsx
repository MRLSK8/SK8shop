import React from 'react';

import GoBackButton from '~/components/GoBackButton';
import { EmptyView } from '~/styles';

import { Container } from './styles';

const ScreenHeader = () => {
  return (
    <Container>
      <GoBackButton />
      <EmptyView />
      <EmptyView />
    </Container>
  );
};

export default ScreenHeader;
