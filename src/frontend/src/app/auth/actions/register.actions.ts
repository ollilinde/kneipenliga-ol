import { Action } from '@ngrx/store';

export const REGISTER_ACTION = '[Auth] Register';
export class RegisterAction implements Action {
  readonly type = REGISTER_ACTION;

  constructor(private payload: { email: string; password: string }) {}
}

export const REGISTER_SUCCEEDED_ACTION = '[Auth] Register succeeded';
export class RegisterSucceededAction implements Action {
  readonly type = REGISTER_SUCCEEDED_ACTION;

  constructor(private payload: any) {}
}

export const REGISTER_FAILED_ACTION = '[Auth] Register failed';
export class RegisterFailedAction implements Action {
  readonly type = REGISTER_FAILED_ACTION;

  constructor(private payload: any) {}
}

export type RegisterActions =
  | RegisterAction
  | RegisterSucceededAction
  | RegisterFailedAction;
