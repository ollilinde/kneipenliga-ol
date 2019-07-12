import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { State, selectAuthUser, selectActiveSeason } from 'src/app/reducers';
import { map } from 'rxjs/operators';
import { ResultsService } from '../services/results.service';
import { SaveResultsAction } from '../actions/results.actions';

@Component({
  selector: 'app-enter',
  templateUrl: './enter.component.html',
  styleUrls: ['./enter.component.scss'],
})
export class EnterComponent implements OnInit {
  opponentTeamId: string;
  homeTeamId: number;
  userId: number;
  seasonId: number;

  constructor(private route: ActivatedRoute, private _store: Store<State>) {}

  ngOnInit() {
    this.opponentTeamId = this.route.snapshot.paramMap.get('opponentId');
    this._store.select(selectAuthUser).subscribe(user => {
      this.homeTeamId = user.team.id;
      this.userId = user.id;
    });
    this._store
      .select(selectActiveSeason)
      .subscribe(season => (this.seasonId = season));
  }

  onEntryFormSave(result) {
    const match = {
      season: { id: 2 },
      user: { id: this.userId },
      date: new Date().toISOString().slice(0, 10),
      teamHome: { id: +this.homeTeamId },
      goalsHome: result.goalsHome,
      teamGuest: { id: +this.opponentTeamId },
      goalsGuest: result.goalsGuest,
    };
    this._store.dispatch(new SaveResultsAction(match));
  }
}
