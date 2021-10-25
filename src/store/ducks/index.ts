import { combineReducers } from 'redux';

import authReducer from './auth.reducer';
import cartReducer from './cart.reducer';

const reducers = combineReducers({
  auth: authReducer,
  cart: cartReducer,
});

export default reducers;
