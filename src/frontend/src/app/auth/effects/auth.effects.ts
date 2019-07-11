import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, tap, exhaustMap, map } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { of } from 'rxjs';
import {
  LoginFailedAction,
  LOGIN_ACTION,
  LOGIN_SUCCEEDED_ACTION,
  LOGOUT_ACTION,
} from 'src/app/actions/login.action';
import { LoginSucceededAction } from '../actions/login.actions';
import { ActionWithPayload } from 'src/app/interfaces/action-with-payload.interface';
import { Router } from '@angular/router';
import {
  REGISTER_ACTION,
  RegisterSucceededAction,
  RegisterFailedAction,
  REGISTER_SUCCEEDED_ACTION,
} from '../actions/register.actions';
import {
  RELOAD_USER_ACTION,
  ReloadUserSucceededAction,
  ReloadUserFailedAction,
} from '../actions/reload-user.actions';

@Injectable()
export class AuthEffects {
  constructor(
    private _actions$: Actions,
    private _authService: AuthService,
    private _router: Router
  ) {}

  @Effect()
  performLogin$ = this._actions$.pipe(
    ofType(LOGIN_ACTION),
    map((action: ActionWithPayload) => action.payload),
    exhaustMap(auth =>
      this._authService.login(auth).pipe(
        map(result => {
          return new LoginSucceededAction(result);
        }),
        catchError(err => of(new LoginFailedAction(err.message)))
      )
    )
  );

  @Effect({ dispatch: false })
  loginSucceeded$ = this._actions$.pipe(
    ofType(LOGIN_SUCCEEDED_ACTION, LOGOUT_ACTION),
    tap(() => this._router.navigate(['/']))
  );

  @Effect()
  performRegistration$ = this._actions$.pipe(
    ofType(REGISTER_ACTION),
    map((action: ActionWithPayload) => action.payload),
    exhaustMap(data =>
      this._authService.register(data).pipe(
        map(result => new RegisterSucceededAction(result)),
        catchError(err => of(new RegisterFailedAction(err)))
      )
    )
  );

  @Effect({ dispatch: false })
  registrationSucceeded$ = this._actions$.pipe(
    ofType(REGISTER_SUCCEEDED_ACTION),
    tap(() => this._router.navigate(['/auth/login']))
  );
}
