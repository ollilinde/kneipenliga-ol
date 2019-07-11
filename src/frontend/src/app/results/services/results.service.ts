import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Store } from '@ngrx/store';
import { State, selectAuthToken } from 'src/app/reducers';
import { map, mapTo, exhaustMap } from 'rxjs/operators';
import { pipe } from 'rxjs';

@Injectable()
export class ResultsService {
  constructor(private _http: HttpClient, private _store: Store<State>) {}

  postResult(payload: any) {
    return this._store.select(selectAuthToken).pipe(
      exhaustMap(authToken => {
        return this._http.post(environment.api.url + '/matches', payload, {
          headers: new HttpHeaders({
            Authorization: 'Bearer ' + authToken,
          }),
        });
      })
    );
  }
}
