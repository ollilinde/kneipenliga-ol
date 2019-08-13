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

export const GET_TABLE_ACTION = '[Table] get action';
export class GetTableAction implements Action {
  readonly type = GET_TABLE_ACTION;

  constructor() {}
}

export const GET_TABLE_SUCCEEDED_ACTION = '[Table] get action succeeded';
export class GetTableSucceededAction implements ActionWithPayload {
  readonly type = GET_TABLE_SUCCEEDED_ACTION;

  constructor(public payload: any) {}
}
