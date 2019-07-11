import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { INIT_ACTION, InitSuccessAction } from './actions/init.action';
import { AppService } from './app.service';
import { of, EMPTY } from 'rxjs';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions, private _appService: AppService) {}

  // @Effect()
  // initEffect$ = this.actions$.pipe(
  //   ofType(INIT_ACTION),
  //   mergeMap(() => {
  //     return this._appService.init().pipe(
  //       map(data => new InitSuccessAction(data)),
  //       catchError(() => EMPTY)
  //     );
  //   })
  // );
}
