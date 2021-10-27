import { CART_ACTIONS_REQUEST } from '../actions/shoppingCart/types.action';
import { Action } from '../types';
import { produce } from 'immer';

export interface ProductProps {
  SupplierWarranty: string,
  countryOfOrigin: string,
  TypeOfShipping: string,
  previousPrice: number,
  description: string,
  price: number,
  image: string,
  color: string,
  name: string,
  id: string,
}

interface CartProps {
  products: ProductProps[],
}

const INITIAL_STATE: CartProps = {
  products: [],
}

const cartReducer = (state = INITIAL_STATE, action: Action) => {
  return produce(state, draft => {
    switch (action.type) {
      case CART_ACTIONS_REQUEST.ADD_PRODUCT_TO_CART:
        if (action.payload?.data) {
          draft.products.push(action.payload.data);
        }
        break;
      case CART_ACTIONS_REQUEST.REMOVE_PRODUCT_FROM_CART:
        if (action.payload?.data?.id) {
          draft.products = draft.products.filter((product) => product.id !== action.payload?.data?.id);
        }
        break;
      case CART_ACTIONS_REQUEST.REMOVE_ALL_PRODUCTS_FROM_CART:
        draft.products.length = 0;
        break;
    }
  });
}

export default cartReducer;
