import { MeState } from './me.state';
import { ActionWithPayload } from '../interfaces/action-with-payload.interface';
import {
  CREATE_TEAM_ACTION,
  CREATE_TEAM_SUCCEEDED_ACTION,
  CREATE_TEAM_FAILED_ACTION,
  LOAD_TEAMS_ACTION,
  LOAD_TEAMS_SUCCEEDED_ACTION,
  LOAD_TEAMS_FAILED_ACTION,
} from './actions/team.actions';

export function reducer(
  state: MeState = {
    createTeamInProgress: false,
    loadTeamsInProgress: false,
  },
  action: ActionWithPayload
): MeState {
  switch (action.type) {
    case CREATE_TEAM_ACTION: {
      return {
        ...state,
        createTeamInProgress: true,
        createTeamError: null,
      };
    }

    case CREATE_TEAM_SUCCEEDED_ACTION: {
      return {
        ...state,
        createTeamInProgress: false,
        createTeamError: null,
      };
    }

    case CREATE_TEAM_FAILED_ACTION: {
      return {
        ...state,
        createTeamInProgress: false,
        createTeamError: action.payload,
      };
    }

    case LOAD_TEAMS_ACTION: {
      return {
        ...state,
        loadTeamsInProgress: true,
      };
    }

    case LOAD_TEAMS_SUCCEEDED_ACTION: {
      return {
        ...state,
        loadTeamsInProgress: false,
        teams: action.payload,
      };
    }

    case LOAD_TEAMS_FAILED_ACTION: {
      return {
        ...state,
        loadTeamsInProgress: false,
        loadTeamsError: action.payload,
        teams: null,
      };
    }

    default: {
      return state;
    }
  }
}
