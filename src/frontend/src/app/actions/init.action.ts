import { Action } from '@ngrx/store';
import { ActionWithPayload } from '../interfaces/action-with-payload.interface';

export const INIT_ACTION = '[System] Init';
export class InitAction implements Action {
  readonly type = INIT_ACTION;

  constructor() {}
}

export const INIT_SUCCESS_ACTION = '[System] Init success';
export class InitSuccessAction implements ActionWithPayload {
  readonly type = INIT_SUCCESS_ACTION;

  constructor(public payload: any) {}
}
