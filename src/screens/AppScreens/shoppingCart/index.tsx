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

  const handleAddProductToCart = () => {
    dispatch(addProductToCart({ id: 'f1d5fa5ehf', name: 'kfajd', price: 15.8 }))
  }

  const handleRemoveProductFromCart = () => {
    dispatch(removeProductFromCart('f1d5fa5ehf'))
  }

  const handleRemoveAllProductsFromCart = () => {
    dispatch(removeAllProductsFromCart())
  }

  return (
    <Container>
      <TouchableOpacity
        style={{ marginTop: 8 }}
        onPress={handleAddProductToCart}
      >
        <Title>Add item</Title>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ marginTop: 8 }}
        onPress={handleRemoveProductFromCart}
      >
        <Title>Remove item</Title>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ marginTop: 8 }}
        onPress={handleRemoveAllProductsFromCart}
      >
        <Title>Remove all item</Title>
      </TouchableOpacity>
    </Container>
  );
};

export default ShoppingCart;
