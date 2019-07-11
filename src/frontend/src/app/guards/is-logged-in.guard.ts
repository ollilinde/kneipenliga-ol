import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { State, selectAuthUser, selectAuthToken } from '../reducers';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class IsLoggedInGuard implements CanActivate {
  constructor(private store: Store<State>, private router: Router) {}

  getFromStoreOrAPI(): Observable<any> {
    return this.store.select(selectAuthToken).pipe(
      map(token => {
        if (!token) {
          this.router.navigate(['/auth/login']);
        }
        return token ? true : false;
      })
    );
  }

  canActivate(): Observable<boolean> {
    return this.getFromStoreOrAPI();
  }
}
