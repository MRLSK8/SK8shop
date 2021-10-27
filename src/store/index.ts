import AsyncStorage from '@react-native-async-storage/async-storage';
import { createStore, compose, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import rootReducers from './ducks';
import sagas from './sagas';

const middlewares = [];

const persistConfig = {
  key: "@sk8shop",
  storage: AsyncStorage,
  whitelist: ["auth", 'cart', 'purchases'],
}

const peristedReducer = persistReducer(persistConfig, rootReducers);

const sagaMiddleware = createSagaMiddleware();

middlewares.push(sagaMiddleware);

const composer = compose(applyMiddleware(...middlewares));

const store = createStore(peristedReducer, composer);

const persistor = persistStore(store);

sagaMiddleware.run(sagas);

export type ApplicationState = ReturnType<typeof rootReducers>;
export type AppDispatch = typeof store.dispatch;

export { store, persistor };
