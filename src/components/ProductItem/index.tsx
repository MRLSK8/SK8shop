import React from 'react';

import { ProductProps } from '~/store/ducks/cart.reducer';
import {
  PreviousProductPrice,
  ProductPrice,
  PriceWrapper,
  Container,
  Image,
  Title,
} from './styles';
import { styles } from '~/styles';

interface ProductItemProps {
  data: ProductProps;
}

const ProductItem: React.FC<ProductItemProps> = ({ data }) => {
  return (
    <Container style={styles.shadow}>
      <Image source={{ uri: data.image }} />
      <Title>{data.name}</Title>
      <PriceWrapper>
        <PreviousProductPrice>{`R$${data.previousPrice.toFixed(2).replace('.', ',')}`}</PreviousProductPrice>
        <ProductPrice> {`R$${data.price.toFixed(2).replace('.', ',')}`}</ProductPrice>
      </PriceWrapper>
    </Container>
  );
};

export default ProductItem;
