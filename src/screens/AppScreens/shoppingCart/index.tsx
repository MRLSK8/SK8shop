import React from 'react';
import { TouchableOpacity } from 'react-native';

import { useAppDispatch } from '~/hooks/reduxHooks';
import {
  removeAllProductsFromCart,
  removeProductFromCart,
  addProductToCart,
} from '~/store/actions/shoppingCart/cart.actions';

import { Container, Title } from './styles';

const ShoppingCart = () => {
  const dispatch = useAppDispatch();

  const handleRemoveProductFromCart = () => {
    dispatch(removeProductFromCart('f1d5fa5ehf'))
  }

  const handleRemoveAllProductsFromCart = () => {
    dispatch(removeAllProductsFromCart())
  }

  return (
    <Container>
      {/* <TouchableOpacity
        style={{ marginTop: 8 }}
        onPress={handleRemoveProductFromCart}
      >
        <Title>Remove item</Title>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ marginTop: 8 }}
        onPress={handleRemoveAllProductsFromCart}
      >
        <Title>Shopping cart</Title>
      </TouchableOpacity> */}

      <Title>Shopping cart</Title>

    </Container>
  );
};

export default ShoppingCart;
