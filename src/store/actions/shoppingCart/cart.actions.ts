import { ProductProps } from '~/store/ducks/cart.reducer';
import { CART_ACTIONS_REQUEST } from './types.action';

export const removeProductFromCart = (
  id: string,
) => ({
  type: CART_ACTIONS_REQUEST.REMOVE_PRODUCT_FROM_CART,
  payload: {
    data: {
      id
    }
  }
});

export const addProductToCart = (data: ProductProps) => ({
  type: CART_ACTIONS_REQUEST.ADD_PRODUCT_TO_CART,
  payload: {
    data
  }
});

export const removeAllProductsFromCart = () => ({
  type: CART_ACTIONS_REQUEST.REMOVE_ALL_PRODUCTS_FROM_CART,
});
