import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { localStorageSync } from 'ngrx-store-localstorage';
import { AuthState } from '../auth/auth.state';
import * as fromAuth from '../auth/auth.reducer';
import * as fromApp from './app.reducers';
import * as fromMe from '../me/me.reducer';
import * as fromResults from '../results/results.reducer';
import { AppState } from './app.state';
import { MeState } from '../me/me.state';
import { ResultsState } from '../results/results.state';

export interface State {
  auth?: AuthState;
  me?: MeState;
  app?: any;
  results: ResultsState;
}

export const reducers: ActionReducerMap<State> = {
  auth: fromAuth.reducer,
  me: fromMe.reducer,
  app: fromApp.reducer,
  results: fromResults.reducer,
};

export function localStorageSyncReducer(
  reducer: ActionReducer<any>
): ActionReducer<any> {
  return localStorageSync({
    keys: [{ auth: ['authToken', 'user'] }],
    rehydrate: true,
  })(reducer);
}

export const metaReducers: Array<MetaReducer<any, any>> = [
  localStorageSyncReducer,
];

export const selectAuth = (state: State) => state.auth;
export const selectMe = (state: State) => state.me;
export const selectApp = (state: State) => state.app;
export const selectResults = (state: State) => state.results;

export const selectAuthUser = createSelector(
  selectAuth,
  (state: AuthState) => state.user
);

export const selectAuthToken = createSelector(
  selectAuth,
  (state: AuthState) => state.authToken
);

export const selectAuthLoginInProgress = createSelector(
  selectAuth,
  (state: AuthState) => state.loginInProgress
);

export const selectAuthLoginError = createSelector(
  selectAuth,
  (state: AuthState) => state.loginError
);

export const selectAuthRegistrationInProgress = createSelector(
  selectAuth,
  (state: AuthState) => state.registrationInProgress
);

export const selectAuthRegistrationError = createSelector(
  selectAuth,
  (state: AuthState) => state.registrationError
);

export const selectActiveSeason = createSelector(
  selectApp,
  (state: AppState) => state.activeSeason
);

export const selectMeCreateTeamInProgress = createSelector(
  selectMe,
  (state: MeState) => state.createTeamInProgress
);

export const selectMeCreateTeamError = createSelector(
  selectMe,
  (state: MeState) => state.createTeamError
);

export const selectMeTeamsInProgress = createSelector(
  selectMe,
  (state: MeState) => state.loadTeamsInProgress
);

export const selectMeTeams = createSelector(
  selectMe,
  (state: MeState) => state.teams
);

export const selectMeTeamsError = createSelector(
  selectMe,
  (state: MeState) => state.loadTeamsError
);

export const selectSaveResultsInProgress = createSelector(
  selectResults,
  (state: ResultsState) => state.saveResultsInProgress
);

export const selectSaveResultsError = createSelector(
  selectResults,
  (state: ResultsState) => state.saveResultsError
);
