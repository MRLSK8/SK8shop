import { AUTH_ACTIONS_REQUEST } from './../actions/auth/types.action';
import { all, takeLatest } from 'redux-saga/effects';
import { login, registration } from './auth.saga';

export default function* rootSaga() {
  yield all([
    takeLatest(AUTH_ACTIONS_REQUEST.LOGIN, login),
    takeLatest(AUTH_ACTIONS_REQUEST.REGISTRATION, registration)
  ]);
}
