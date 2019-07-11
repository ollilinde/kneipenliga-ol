import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/reducers';
import { RecoverAction } from 'src/app/actions/recover.action';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-recover',
  templateUrl: './recover.component.html',
  styleUrls: ['./recover.component.scss']
})
export class RecoverComponent implements OnInit {

  recoverForm = new FormGroup({
    email: new FormControl('')
  });
  
  constructor(
    private _store: Store<State>
  ) { }

  ngOnInit() {
  }

  triggerRecover() {
    this._store.dispatch(new RecoverAction(this.recoverForm.value));
  }

}
