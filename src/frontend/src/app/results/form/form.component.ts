import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { State, selectAuthUser } from 'src/app/reducers';

@Component({
  selector: 'app-results-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @Input('loading') loading$;
  @Input('error') error$;

  user$;

  resultForm = new FormGroup({
    homePoints1: new FormControl('0'),
    guestPoints1: new FormControl('0'),
  });

  @Output() save: EventEmitter<any> = new EventEmitter();

  constructor(private _store: Store<State>) {}

  ngOnInit() {
    this.user$ = this._store.select(selectAuthUser);
  }

  saveResult() {
    const res = this.resultForm.value;
    const home = +res['homePoints1'];
    const guest = +res['guestPoints1'];

    if (home + guest > 0 && (home === 6 || guest === 6))
      this.save.emit({
        goalsHome: home,
        goalsGuest: guest,
      });
  }
}
