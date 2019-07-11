import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State, selectAuthUser } from 'src/app/reducers';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent implements OnInit {
  user$;

  constructor(private _store: Store<State>) {}

  ngOnInit() {
    this.user$ = this._store.select(selectAuthUser);
  }
}
