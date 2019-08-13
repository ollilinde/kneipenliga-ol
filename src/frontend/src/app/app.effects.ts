import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';
import {
  INIT_ACTION,
  InitSuccessAction,
  GET_TABLE_ACTION,
  GetTableSucceededAction,
} from './actions/init.action';
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

  @Effect()
  getTableEffect$ = this.actions$.pipe(
    ofType(GET_TABLE_ACTION),
    mergeMap(() => {
      return this._appService.getTable().pipe(
        map(data => new GetTableSucceededAction(data)),
        catchError(() => EMPTY)
      );
    })
  );
}
