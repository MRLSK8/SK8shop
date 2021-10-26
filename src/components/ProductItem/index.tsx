import React from 'react';

import { numberToCurrency } from '~/helpers/numberToCurrency';
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
  callback(productData: ProductProps): void;
  productData: ProductProps;
}

const ProductItem: React.FC<ProductItemProps> = ({ productData, callback }) => {
  return (
    <Container
      onPress={() => callback(productData)}
      style={styles.shadow}
    >
      <Image source={{ uri: productData.image }} />
      <Title>{productData.name}</Title>
      <PriceWrapper>
        <PreviousProductPrice>{numberToCurrency(productData.previousPrice)}</PreviousProductPrice>
        <ProductPrice> {numberToCurrency(productData.price)}</ProductPrice>
      </PriceWrapper>
    </Container>
  );
};

export default ProductItem;
