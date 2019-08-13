import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import {
  State,
  selectMeCreateTeamInProgress,
  selectMeCreateTeamError,
  selectAuthUser,
} from 'src/app/reducers';
import { CreateTeamAction } from '../actions/team.actions';
import { map, takeLast, take } from 'rxjs/operators';

@Component({
  selector: 'app-team-create',
  templateUrl: './team-create.component.html',
  styleUrls: ['./team-create.component.scss'],
})
export class TeamCreateComponent implements OnInit {
  $createTeamInProgress;
  $createTeamError;

  createTeamForm = new FormGroup({
    name: new FormControl(''),
    slogan: new FormControl(''),
    userId: new FormControl(''),
  });

  constructor(private _store: Store<State>) {}

  ngOnInit() {
    this._store.select(selectAuthUser).subscribe(val => {
      this.createTeamForm.get('userId').setValue(val.id);
    });
    this.$createTeamInProgress = this._store.select(
      selectMeCreateTeamInProgress
    );
    this.$createTeamError = this._store.select(selectMeCreateTeamError);
  }

  triggerCreateTeam() {
    const data = this.createTeamForm.value;
    console.log(data);
    this._store.dispatch(
      new CreateTeamAction({
        name: data.name,
        slogan: data.slogan,
        members: [{ id: data.userId }],
      })
    );
  }
}
