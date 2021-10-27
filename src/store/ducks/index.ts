import { combineReducers } from 'redux';

import purchasesReducer from './purchases.reducer';
import authReducer from './auth.reducer';
import cartReducer from './cart.reducer';

const reducers = combineReducers({
  purchases: purchasesReducer,
  auth: authReducer,
  cart: cartReducer,
});

export default reducers;
