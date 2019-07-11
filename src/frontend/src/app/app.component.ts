import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State, selectAuthUser } from './reducers';
import { Router, ResolveEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { LogoutAction } from './actions/login.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  navigationActive: boolean = false;
  $hideHeader: any;
  $user: any;

  constructor(private _store: Store<State>, private _router: Router) {}

  ngOnInit() {
    // this._store.dispatch(new InitAction());
    this.$user = this._store.pipe(select(selectAuthUser));
    this.$hideHeader = this._router.events.pipe(
      filter(event => event instanceof ResolveEnd),
      map((val: ResolveEnd) => val.url.startsWith('/auth'))
    );
  }

  toggleNavigation() {
    this.navigationActive = !this.navigationActive;
  }

  logout() {
    this._store.dispatch(new LogoutAction());
    this.toggleNavigation();
  }
}
