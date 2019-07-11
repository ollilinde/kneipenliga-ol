import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { exhaustMap } from 'rxjs/operators';
import { selectAuthToken, State } from 'src/app/reducers';
import { Store } from '@ngrx/store';

@Injectable()
export class AuthService {
  constructor(private _http: HttpClient, private _store: Store<State>) {}

  login(payload: { email: string; password: string }) {
    return this._http.post(environment.api.url + '/users/login', payload);
  }

  register(payload: {
    name: string;
    surname: string;
    email: string;
    password: string;
  }) {
    return this._http.post(environment.api.url + '/users/register', payload);
  }
}
