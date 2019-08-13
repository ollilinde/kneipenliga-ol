import { Action } from '@ngrx/store';
import { ActionWithPayload } from '../../interfaces/action-with-payload.interface';

export const CREATE_TEAM_ACTION = '[Team] create';
export class CreateTeamAction implements ActionWithPayload {
  readonly type = CREATE_TEAM_ACTION;

  constructor(public payload: any) {}
}

export const CREATE_TEAM_SUCCEEDED_ACTION = '[Team] create success';
export class CreateTeamSuccessAction implements ActionWithPayload {
  readonly type = CREATE_TEAM_SUCCEEDED_ACTION;

  constructor(public payload: any) {}
}

export const CREATE_TEAM_FAILED_ACTION = '[Team] create failed';
export class CreateTeamFailedAction implements ActionWithPayload {
  readonly type = CREATE_TEAM_FAILED_ACTION;

  constructor(public payload: any) {}
}

export const LOAD_TEAMS_ACTION = '[Teams] load';
export class LoadTeamsAction implements Action {
  readonly type = LOAD_TEAMS_ACTION;

  constructor() {}
}

export const LOAD_TEAMS_SUCCEEDED_ACTION = '[Teams] load success';
export class LoadTeamsSuccessAction implements ActionWithPayload {
  readonly type = LOAD_TEAMS_SUCCEEDED_ACTION;

  constructor(public payload: any) {}
}

export const LOAD_TEAMS_FAILED_ACTION = '[Teams] load failed';
export class LoadTeamsFailedAction implements ActionWithPayload {
  readonly type = LOAD_TEAMS_FAILED_ACTION;

  constructor(public payload: any) {}
}

export const ADD_EMAIL_TO_TEAM_ACTION = '[Teams] add email to team';
export class AddEmailToTeamAction implements ActionWithPayload {
  readonly type = ADD_EMAIL_TO_TEAM_ACTION;

  constructor(public payload: { email: string }) {}
}

export const ADD_EMAIL_TO_TEAM_ACTION_SUCCEEDED =
  '[Teams] add email to team succeeded';
export class AddEmailToTeamSucceededAction implements ActionWithPayload {
  readonly type = ADD_EMAIL_TO_TEAM_ACTION_SUCCEEDED;

  constructor(public payload: any) {}
}

export const ADD_EMAIL_TO_TEAM_ACTION_FAILED =
  '[Teams] add email to team failed';
export class AddEmailToTeamFailedAction implements ActionWithPayload {
  readonly type = ADD_EMAIL_TO_TEAM_ACTION_FAILED;

  constructor(public payload: any) {}
}
