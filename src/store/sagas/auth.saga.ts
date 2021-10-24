import { AUTH_ACTIONS_REQUEST } from '../actions/auth/types.action';
import { put, call } from '@redux-saga/core/effects';
import { Action } from '../types';
import api from '~/services/api';

export function* registration(action: Action) {
  const email = action.payload?.data?.email;
  const password = action.payload?.data?.password;

  try {
    yield put({ type: AUTH_ACTIONS_REQUEST.REQUEST });

    // const { data } = yield call(api.post, '/register', { email, password });

    yield put({
      type: AUTH_ACTIONS_REQUEST.REGISTRATION_SUCCESS, payload: {
        data: {
          user: {
            email: 'teste@hotmail.com',
            token: 'kfjj15fd51fd65a',
            name: 'João',
          },
        }
      }
    });
  } catch (error) {
    yield put({
      type: AUTH_ACTIONS_REQUEST.REQUEST_ERROR,
      payload: {
        // @ts-ignore
        data: error?.response?.data?.error || ''
      }
    });
  }
}

export function* login(action: Action) {
  const email = action.payload?.data?.email;
  const password = action.payload?.data?.password;

  try {
    yield put({ type: AUTH_ACTIONS_REQUEST.REQUEST });

    // const { data } = yield call(api.post, '/login', { email, password });

    yield put({
      type: AUTH_ACTIONS_REQUEST.LOGIN_SUCCESS, payload: {
        data: {
          user: {
            email: 'teste@hotmail.com',
            token: 'kfjj15fd51fd65a',
            name: 'João',
          },
        }
      }
    });
  } catch (error) {
    yield put({
      type: AUTH_ACTIONS_REQUEST.REQUEST_ERROR, payload: {
        // @ts-ignore
        data: error?.response?.data?.error || ''
      }
    });
  }
}
