import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Store } from '@ngrx/store';
import { AuthState } from './auth/auth.state';
import { selectAuthToken, State } from './reducers';
import { AppState } from './reducers/app.state';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private _httpService: HttpClient, private _store: Store<State>) {}

  async init() {
    const authToken = await this._store.select(selectAuthToken);
    return this._httpService.get(environment.api.url + '/init', {
      headers: new HttpHeaders({
        Authentication: 'Bearer ' + authToken,
      }),
    });
  }

  getTable() {
    return this._httpService.get(environment.api.url + '/seasons/table');
  }
}
