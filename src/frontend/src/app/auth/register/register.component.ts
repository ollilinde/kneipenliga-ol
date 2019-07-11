import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import {
  State,
  selectAuthRegistrationInProgress,
  selectAuthRegistrationError,
} from 'src/app/reducers';
import { RegisterAction } from '../actions/register.actions';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  $registerInProgress;
  $registerError;

  registerForm = new FormGroup(
    {
      name: new FormControl('', Validators.required),
      surname: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.minLength(8)),
      passwordRepeat: new FormControl('', Validators.minLength(8)),
    },
    group => {
      console.log(group.get('email').errors);
      if (group) {
        if (group.get('password').value !== group.get('passwordRepeat').value) {
          return { notMatching: true };
        }
      }
      return null;
    }
  );

  constructor(private _store: Store<State>) {}

  ngOnInit() {
    this.$registerInProgress = this._store.select(
      selectAuthRegistrationInProgress
    );
    this.$registerError = this._store.select(selectAuthRegistrationError);
  }

  triggerRegister() {
    this._store.dispatch(new RegisterAction(this.registerForm.value));
  }
}
