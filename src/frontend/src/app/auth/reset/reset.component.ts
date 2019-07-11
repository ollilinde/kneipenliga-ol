import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { State } from 'src/app/reducers';
import { ResetAction } from 'src/app/actions/reset.action';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {

  resetForm = new FormGroup({
    password: new FormControl(''),
    passwordRepeat: new FormControl(''),
    token: new FormControl('sadlkaf4wedfs'),
  });

  constructor(
    private _store: Store<State>
  ) { }

  ngOnInit() {
  }

  triggerReset() {
    this._store.dispatch(new ResetAction(this.resetForm.value));
  }

}
