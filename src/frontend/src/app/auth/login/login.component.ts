import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  State,
  selectAuthLoginInProgress,
  selectAuthLoginError,
} from 'src/app/reducers';
import { LoginAction } from 'src/app/actions/login.action';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  $loginInProgress;
  $loginError;

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private _store: Store<State>) {}

  ngOnInit() {
    this.$loginInProgress = this._store.select(selectAuthLoginInProgress);
    this.$loginError = this._store.select(selectAuthLoginError);
  }

  triggerLogin() {
    this._store.dispatch(new LoginAction(this.loginForm.value));
  }
}
