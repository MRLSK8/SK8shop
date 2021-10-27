import { ProductProps } from '~/store/ducks/cart.reducer';
import { PURCHASES_ACTIONS_REQUEST } from './types.action';

export const addProductsToPurchases = (data: ProductProps[]) => ({
  type: PURCHASES_ACTIONS_REQUEST.ADD_PRODUCTS_TO_PURCHASES,
  payload: {
    data
  }
});


export const removeProductToPurchases = (data: ProductProps) => ({
  type: PURCHASES_ACTIONS_REQUEST.REMOVE_PRODUCT_FROM_PURCHASES,
  payload: {
    data
  }
});
