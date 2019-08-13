import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State, selectActiveSeason, selectTable } from 'src/app/reducers';
import { GetTableAction } from 'src/app/actions/init.action';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  activeSeason$;
  table$;

  constructor(private _store: Store<State>) {}

  ngOnInit() {
    this.activeSeason$ = this._store.select(selectActiveSeason);
    this.table$ = this._store.select(selectTable);
    this._store.dispatch(new GetTableAction());
  }
}
