import { AUTH_ACTIONS_REQUEST } from './../actions/auth/types.action';
import { Action } from '../types';
import { produce } from 'immer';

export interface UserProps {
  email: string,
  token: string,
  name: string,
}

interface AuthProps {
  isAuthenticated: boolean,
  isLoading: boolean,
  error: {
    hasError: boolean,
    message: string,
  },
  data: {
    user: UserProps
  },
}

const INITIAL_STATE: AuthProps = {
  isAuthenticated: false,
  isLoading: false,
  error: {
    hasError: false,
    message: '',
  },
  data: {
    user: {
      email: '',
      token: '',
      name: '',
    }
  },
}

const authReducer = (state = INITIAL_STATE, action: Action) => {
  return produce(state, draft => {
    switch (action.type) {
      case AUTH_ACTIONS_REQUEST.REQUEST:
        draft.isLoading = true;
        draft.error = {
          hasError: false,
          message: '',
        };
        break;

      case AUTH_ACTIONS_REQUEST.LOGIN_SUCCESS:
        draft.isAuthenticated = true;
        draft.isLoading = false;
        draft.error = {
          hasError: false,
          message: '',
        };
        draft.data = {
          ...draft.data,
          ...action?.payload?.data,
        };
        break;

      case AUTH_ACTIONS_REQUEST.LOGOUT:
        draft.isAuthenticated = false;
        draft.isLoading = false;
        draft.error = {
          hasError: false,
          message: '',
        };
        draft.data = {
          user: {
            email: '',
            token: '',
            name: '',
          },
        };
        break;

      case AUTH_ACTIONS_REQUEST.REGISTRATION_SUCCESS:
        draft.isAuthenticated = true;
        draft.isLoading = false;
        draft.error = {
          hasError: false,
          message: '',
        };
        draft.data = {
          ...draft.data,
          ...action?.payload?.data,
        };
        break;

      case AUTH_ACTIONS_REQUEST.CLEAN_REQUEST_ERROR:
        draft.error = {
          hasError: false,
          message: '',
        };
        break;

      case AUTH_ACTIONS_REQUEST.REQUEST_ERROR:
        draft.isLoading = false;
        draft.error = {
          message: action?.payload?.data || '',
          hasError: true,
        };
        break;
    }
  });
}

export default authReducer;
