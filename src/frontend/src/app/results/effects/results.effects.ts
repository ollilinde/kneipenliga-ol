import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {
  catchError,
  tap,
  exhaustMap,
  map,
  mapTo,
  mergeMap,
} from 'rxjs/operators';
import { of } from 'rxjs';
import { ActionWithPayload } from 'src/app/interfaces/action-with-payload.interface';
import { Router } from '@angular/router';
import { ResultsService } from '../services/results.service';
import {
  SAVE_RESULTS_ACTION,
  SaveResultsSucceededAction,
  SaveResultsFailedAction,
  SAVE_RESULTS_SUCCEEDED_ACTION,
} from '../actions/results.actions';

@Injectable()
export class ResultsEffects {
  constructor(
    private _actions$: Actions,
    private _resultsService: ResultsService,
    private _router: Router
  ) {
    console.log('Effects instatiated');
  }

  @Effect()
  saveResults$ = this._actions$.pipe(
    ofType(SAVE_RESULTS_ACTION),
    map((action: ActionWithPayload) => action.payload),
    mergeMap(data =>
      this._resultsService.postResult(data).pipe(
        map(result => {
          return new SaveResultsSucceededAction(result);
        }),
        catchError(err => of(new SaveResultsFailedAction(err.message)))
      )
    )
  );

  @Effect({ dispatch: false })
  saveResultSucceeded$ = this._actions$.pipe(
    ofType(SAVE_RESULTS_SUCCEEDED_ACTION),
    tap(() => this._router.navigate(['/me/overview']))
  );
}
