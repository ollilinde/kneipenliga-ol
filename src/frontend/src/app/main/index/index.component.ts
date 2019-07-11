import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State, selectActiveSeason } from 'src/app/reducers';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  activeSeason$;

  constructor(private _store: Store<State>) {}

  ngOnInit() {
    this.activeSeason$ = this._store.select(selectActiveSeason);
  }
}
