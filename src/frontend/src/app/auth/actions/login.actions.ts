import { Action } from '@ngrx/store';

export const LOGIN_ACTION = '[Auth] Login';
export class LoginAction implements Action {
  readonly type = LOGIN_ACTION;

  constructor (private payload: {email: string, password: string}) {}
}

export const LOGIN_SUCCEEDED_ACTION = '[Auth] Login succeeded';
export class LoginSucceededAction implements Action {
  readonly type = LOGIN_SUCCEEDED_ACTION;

  constructor (private payload: any) {}
}

export const LOGIN_FAILED_ACTION = '[Auth] Login failed';
export class LoginFailedAction implements Action {
  readonly type = LOGIN_FAILED_ACTION;

  constructor (private payload: any) {}
}

export type LoginActions = LoginAction | LoginSucceededAction | LoginFailedAction;