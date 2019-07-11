import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ActionWithPayload } from 'src/app/interfaces/action-with-payload.interface';
import { Router } from '@angular/router';
import { MeService } from '../services/me.service';
import {
  CREATE_TEAM_ACTION,
  CreateTeamSuccessAction,
  CreateTeamFailedAction,
  CREATE_TEAM_SUCCEEDED_ACTION,
  LOAD_TEAMS_ACTION,
  LoadTeamsSuccessAction,
} from '../actions/team.actions';
import {
  ReloadUserAction,
  RELOAD_USER_ACTION,
  ReloadUserSucceededAction,
  ReloadUserFailedAction,
} from 'src/app/auth/actions/reload-user.actions';
import { Action } from '@ngrx/store';

@Injectable()
export class MeEffects {
  constructor(
    private _actions$: Actions,
    private _meService: MeService,
    private _router: Router
  ) {}

  @Effect()
  createTeam$ = this._actions$.pipe(
    ofType(CREATE_TEAM_ACTION),
    map((action: ActionWithPayload) => action.payload),
    exhaustMap(data =>
      this._meService.createTeam(data).pipe(
        map(result => {
          return new CreateTeamSuccessAction({ user: data.members[0].id });
        }),
        catchError(err => of(new CreateTeamFailedAction(err.message)))
      )
    )
  );

  @Effect()
  createTeamSucceeded$ = this._actions$.pipe(
    ofType(CREATE_TEAM_SUCCEEDED_ACTION),
    map((action: ActionWithPayload) => {
      return action.payload;
    }),
    map(data => {
      return new ReloadUserAction({ id: data.user });
    })
  );

  @Effect({ dispatch: false })
  navigateToOverview$ = this._actions$.pipe(
    ofType(CREATE_TEAM_SUCCEEDED_ACTION),
    tap(() => this._router.navigate(['/me/overview']))
  );

  @Effect()
  reloadUser$ = this._actions$.pipe(
    ofType(RELOAD_USER_ACTION),
    map((action: ActionWithPayload) => action.payload),
    exhaustMap(data => {
      console.log(data);
      return this._meService.getUser(data).pipe(
        map(result => new ReloadUserSucceededAction(result)),
        catchError(err => of(new ReloadUserFailedAction(err)))
      );
    })
  );

  @Effect()
  loadTeams$ = this._actions$.pipe(
    ofType(LOAD_TEAMS_ACTION),
    map((action: Action) => action),
    exhaustMap(() =>
      this._meService.getTeams().pipe(
        map(result => {
          return new LoadTeamsSuccessAction(result);
        }),
        catchError(err => of(new CreateTeamFailedAction(err.message)))
      )
    )
  );
}
