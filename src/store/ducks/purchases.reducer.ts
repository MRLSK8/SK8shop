import { PURCHASES_ACTIONS_REQUEST } from '../actions/purchases/types.action';
import { ProductProps } from './cart.reducer';
import { Action } from '../types';
import { produce } from 'immer';

interface ProductBoughtProps extends ProductProps {
  purchaseNumber: number,
  purchaseDate: string,
}

interface PurchasesProps {
  totalPurchases: number,
  products: ProductBoughtProps[],
}

const INITIAL_STATE: PurchasesProps = {
  totalPurchases: 0,
  products: [],
}

const purchasesReducer = (state = INITIAL_STATE, action: Action) => {
  return produce(state, draft => {
    switch (action.type) {
      case PURCHASES_ACTIONS_REQUEST.ADD_PRODUCTS_TO_PURCHASES:
        if (action.payload?.data?.length > 0) {
          const newProducts = action.payload?.data.map((_data: ProductBoughtProps, index: number) => {
            return { ..._data, purchaseNumber: draft.totalPurchases + (index + 1) };
          });

          draft.totalPurchases += newProducts.length;

          draft.products = [...draft.products, ...newProducts];
        }
        break;
      case PURCHASES_ACTIONS_REQUEST.REMOVE_PRODUCT_FROM_PURCHASES:
        if (action.payload?.data) {
          draft.products = draft.products.filter((product) => {
            return product.purchaseNumber !== action.payload?.data?.purchaseNumber;
          });
        }
        break;
    }
  });
}

export default purchasesReducer;
