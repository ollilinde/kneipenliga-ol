import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State, selectAuthUser, selectMeTeams } from 'src/app/reducers';
import { LoadTeamsAction } from '../actions/team.actions';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit {
  user$;
  teams$;

  constructor(private _store: Store<State>) {}

  ngOnInit() {
    this.user$ = this._store.select(selectAuthUser);
    this.teams$ = this._store.select(selectMeTeams);

    this._store.dispatch(new LoadTeamsAction());
  }
}
