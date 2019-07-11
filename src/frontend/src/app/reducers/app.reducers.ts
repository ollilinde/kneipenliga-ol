import { ActionWithPayload } from '../interfaces/action-with-payload.interface';
import { AppState, InitialAppState } from './app.state';
import { INIT_SUCCESS_ACTION, INIT_ACTION } from '../actions/init.action';

export function reducer(
  state: AppState = InitialAppState,
  action: ActionWithPayload
): AppState {
  switch (action.type) {
    case INIT_SUCCESS_ACTION: {
      return action.payload;
    }

    default: {
      return state;
    }
  }
}
