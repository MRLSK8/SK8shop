import { AUTH_ACTIONS_REQUEST } from './types.action';
import { UserProps } from '~/store/ducks/auth.reducer';

export const registrationAsync = (
  password: string,
  email: string,
) => ({
  type: AUTH_ACTIONS_REQUEST.REGISTRATION,
  payload: {
    data: {
      email,
      password,
    }
  }
});

export const registrationSuccess = (data: UserProps) => ({
  type: AUTH_ACTIONS_REQUEST.REGISTRATION_SUCCESS,
  payload: {
    data
  }
});

export const loginAsync = (email: string, password: string) => ({
  type: AUTH_ACTIONS_REQUEST.LOGIN,
  payload: {
    data: {
      password,
      email,
    }
  }
});

export const loginSuccess = (data: UserProps) => ({
  type: AUTH_ACTIONS_REQUEST.LOGIN_SUCCESS,
  payload: {
    data
  }
});

export const logout = () => ({
  type: AUTH_ACTIONS_REQUEST.LOGOUT,
});

export const cleanRequestError = () => ({
  type: AUTH_ACTIONS_REQUEST.CLEAN_REQUEST_ERROR,
});

export const request = () => ({
  type: AUTH_ACTIONS_REQUEST.REQUEST,
});

export const requestError = () => ({
  type: AUTH_ACTIONS_REQUEST.REQUEST_ERROR,
});
