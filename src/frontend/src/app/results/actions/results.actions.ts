import { Action } from '@ngrx/store';

export const SAVE_RESULTS_ACTION = '[Results] save';
export class SaveResultsAction implements Action {
  readonly type = SAVE_RESULTS_ACTION;

  constructor(private payload: any) {}
}

export const SAVE_RESULTS_SUCCEEDED_ACTION = '[Results] save succeeded';
export class SaveResultsSucceededAction implements Action {
  readonly type = SAVE_RESULTS_SUCCEEDED_ACTION;

  constructor(private payload: any) {}
}

export const SAVE_RESULTS_FAILED_ACTION = '[Results] save failed';
export class SaveResultsFailedAction implements Action {
  readonly type = SAVE_RESULTS_FAILED_ACTION;

  constructor(private payload: any) {}
}

export type SaveResultsActions =
  | SaveResultsAction
  | SaveResultsSucceededAction
  | SaveResultsFailedAction;
