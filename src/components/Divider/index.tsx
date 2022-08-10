import React from 'react';

import { Container, DividerView, DividerText } from './styles';

interface IDividerProps {
  containerWidth?: number;
  marginVertical?: number;
  text?: string;
}

const Divider: React.FC<IDividerProps> = ({ text, containerWidth, marginVertical }) => {
  return (
    <Container
      containerWidth={containerWidth}
      marginVertical={marginVertical}
    >
      <DividerView />
      {
        !!text && (
          <DividerText>
            {text}
          </DividerText>
        )
      }
      <DividerView />
    </Container>
  );
};

export default Divider;
