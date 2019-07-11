import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { Store } from '@ngrx/store';
import { State, selectAuthUser } from '../reducers';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class IsAdminGuard implements CanActivate {
  constructor(private store: Store<State>) {}

  getFromStoreOrAPI(): Observable<any> {
    return this.store.select(selectAuthUser).pipe(map(user => user.isAdmin));
  }

  canActivate(): Observable<boolean> {
    return this.getFromStoreOrAPI();
  }
}
