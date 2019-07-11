import { Action } from '@ngrx/store';
import { AuthState } from './auth.state';
import { LOGIN_ACTION, LOGIN_FAILED_ACTION } from './actions/login.actions';
import { LOGIN_SUCCEEDED_ACTION, LOGOUT_ACTION } from '../actions/login.action';
import { ActionWithPayload } from '../interfaces/action-with-payload.interface';
import {
  REGISTER_ACTION,
  REGISTER_SUCCEEDED_ACTION,
  REGISTER_FAILED_ACTION,
} from './actions/register.actions';
import { RELOAD_USER_SUCCEEDED_ACTION } from './actions/reload-user.actions';

export function reducer(
  state: AuthState = {
    loginInProgress: false,
    registrationInProgress: false,
  },
  action: ActionWithPayload
): AuthState {
  switch (action.type) {
    case LOGIN_ACTION: {
      return {
        ...state,
        loginInProgress: true,
        loginError: null,
      };
    }

    case LOGIN_SUCCEEDED_ACTION: {
      return {
        ...state,
        loginInProgress: false,
        loginError: null,
        authToken: action.payload.jwt,
        user: action.payload.user,
      };
    }

    case LOGIN_FAILED_ACTION: {
      return {
        ...state,
        loginInProgress: false,
        loginError: action.payload,
      };
    }

    case REGISTER_ACTION: {
      return {
        ...state,
        registrationInProgress: true,
        registrationError: null,
      };
    }

    case REGISTER_SUCCEEDED_ACTION: {
      return {
        ...state,
        registrationInProgress: false,
        registrationError: null,
      };
    }

    case REGISTER_FAILED_ACTION: {
      return {
        ...state,
        registrationInProgress: false,
        registrationError: action.payload,
      };
    }

    case RELOAD_USER_SUCCEEDED_ACTION: {
      return {
        ...state,
        user: action.payload,
      };
    }

    case LOGOUT_ACTION: {
      return {
        loginInProgress: false,
        registrationInProgress: false,
      };
    }

    default: {
      return state;
    }
  }
}
