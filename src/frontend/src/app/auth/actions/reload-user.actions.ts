import { Action } from '@ngrx/store';

export const RELOAD_USER_ACTION = '[Auth] reload user';
export class ReloadUserAction implements Action {
  readonly type = RELOAD_USER_ACTION;

  constructor(private payload: { id: number }) {}
}

export const RELOAD_USER_SUCCEEDED_ACTION = '[Auth] reload user succeeded';
export class ReloadUserSucceededAction implements Action {
  readonly type = RELOAD_USER_SUCCEEDED_ACTION;

  constructor(private payload: any) {}
}

export const RELOAD_USER_FAILED_ACTION = '[Auth] reload user failed';
export class ReloadUserFailedAction implements Action {
  readonly type = RELOAD_USER_FAILED_ACTION;

  constructor(private payload: any) {}
}

export type ReloadUserActions =
  | ReloadUserAction
  | ReloadUserSucceededAction
  | ReloadUserFailedAction;
