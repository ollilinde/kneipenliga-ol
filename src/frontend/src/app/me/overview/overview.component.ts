import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  State,
  selectAuthUser,
  selectMeTeams,
  selectAddByEmailToTeamInProgress,
  selectAddByEmailToTeamError,
} from 'src/app/reducers';
import { LoadTeamsAction, AddEmailToTeamAction } from '../actions/team.actions';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit {
  user$;
  teams$;
  addEmailToTeamInProgress$;
  addEmailToTeamError$;

  addMemberForm = new FormGroup({
    email: new FormControl('', [Validators.email]),
  });

  constructor(private _store: Store<State>) {}

  ngOnInit() {
    this.user$ = this._store.select(selectAuthUser);
    this.teams$ = this._store.select(selectMeTeams);
    this.addEmailToTeamInProgress$ = this._store.select(
      selectAddByEmailToTeamInProgress
    );
    this.addEmailToTeamError$ = this._store.select(selectAddByEmailToTeamError);

    this._store.dispatch(new LoadTeamsAction());
  }

  onAddMember() {
    const data = this.addMemberForm.value;
    this._store.dispatch(
      new AddEmailToTeamAction({
        email: data.email,
      })
    );
  }
}
