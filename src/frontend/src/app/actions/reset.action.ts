import { Action } from '@ngrx/store';

export class ResetAction implements Action {
  readonly type = '[Auth] Reset';

  constructor (private payload: { password: string, passwordRepeat: string, token: string }) {}
}