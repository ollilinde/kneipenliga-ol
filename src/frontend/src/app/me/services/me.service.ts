import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Store } from '@ngrx/store';
import { State, selectAuthToken } from 'src/app/reducers';
import { map, mapTo, exhaustMap } from 'rxjs/operators';
import { pipe } from 'rxjs';

@Injectable()
export class MeService {
  constructor(private _http: HttpClient, private _store: Store<State>) {}

  createTeam(payload: { name: string; slogan: string }) {
    return this._store.select(selectAuthToken).pipe(
      exhaustMap(authToken => {
        return this._http.post(environment.api.url + '/teams', payload, {
          headers: new HttpHeaders({
            Authorization: 'Bearer ' + authToken,
          }),
        });
      })
    );
  }

  getUser(payload: { id: number }) {
    return this._store.select(selectAuthToken).pipe(
      exhaustMap(authToken =>
        this._http.get(environment.api.url + '/users/' + payload.id, {
          headers: new HttpHeaders({
            Authorization: 'Bearer ' + authToken,
          }),
        })
      )
    );
  }

  getTeams() {
    return this._http.get(environment.api.url + '/teams');
  }
}
