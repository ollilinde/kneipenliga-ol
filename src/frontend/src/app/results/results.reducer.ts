import { ActionWithPayload } from '../interfaces/action-with-payload.interface';
import { ResultsState } from './results.state';
import {
  SAVE_RESULTS_ACTION,
  SAVE_RESULTS_SUCCEEDED_ACTION,
  SAVE_RESULTS_FAILED_ACTION,
} from './actions/results.actions';

export function reducer(
  state: ResultsState = {
    saveResultsInProgress: false,
  },
  action: ActionWithPayload
): ResultsState {
  switch (action.type) {
    case SAVE_RESULTS_ACTION: {
      return {
        ...state,
        saveResultsInProgress: true,
        saveResultsError: null,
      };
    }

    case SAVE_RESULTS_SUCCEEDED_ACTION: {
      return {
        ...state,
        saveResultsInProgress: false,
        saveResultsError: null,
      };
    }

    case SAVE_RESULTS_FAILED_ACTION: {
      return {
        ...state,
        saveResultsInProgress: false,
        saveResultsError: action.payload,
      };
    }

    default: {
      return state;
    }
  }
}
