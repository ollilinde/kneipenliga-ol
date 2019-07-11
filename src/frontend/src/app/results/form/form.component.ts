import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { State, selectAuthUser } from 'src/app/reducers';

@Component({
  selector: 'app-results-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  user$;

  resultForm = new FormGroup({
    homePoints1: new FormControl('0'),
    guestPoints1: new FormControl('0'),
    homePoints2: new FormControl('0'),
    guestPoints2: new FormControl('0'),
    homePoints3: new FormControl('0'),
    guestPoints3: new FormControl('0'),
    homePoints4: new FormControl('0'),
    guestPoints4: new FormControl('0'),
    homePoints5: new FormControl('0'),
    guestPoints5: new FormControl('0'),
  });

  @Output() save: EventEmitter<any> = new EventEmitter();

  constructor(private _store: Store<State>) {}

  ngOnInit() {
    this.user$ = this._store.select(selectAuthUser);
  }

  saveResult() {
    const res = this.resultForm.value;
    let sets = [];
    for (let i = 1; i <= 5; i++) {
      const home = +res['homePoints' + i];
      const guest = +res['guestPoints' + i];

      if (home + guest > 0)
        sets.push({
          goalsHome: +res['homePoints' + i],
          goalsGuest: +res['guestPoints' + i],
        });
    }
    this.save.emit(sets);
  }
}
