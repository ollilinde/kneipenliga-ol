import { Action } from '@ngrx/store';

export class RecoverAction implements Action {
  readonly type = '[Auth] Recover';

  constructor (private payload: { email: string }) {}
}