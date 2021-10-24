import { combineReducers } from 'redux';

import authReducer from './auth.reducer';

const reducers = combineReducers({
  auth: authReducer,
});

export default reducers;
