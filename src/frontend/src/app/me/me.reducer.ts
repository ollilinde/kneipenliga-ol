import { MeState } from './me.state';
import { ActionWithPayload } from '../interfaces/action-with-payload.interface';
import {
  CREATE_TEAM_ACTION,
  CREATE_TEAM_SUCCEEDED_ACTION,
  CREATE_TEAM_FAILED_ACTION,
  LOAD_TEAMS_ACTION,
  LOAD_TEAMS_SUCCEEDED_ACTION,
  LOAD_TEAMS_FAILED_ACTION,
  ADD_EMAIL_TO_TEAM_ACTION,
  ADD_EMAIL_TO_TEAM_ACTION_SUCCEEDED,
  ADD_EMAIL_TO_TEAM_ACTION_FAILED,
} from './actions/team.actions';

export function reducer(
  state: MeState = {
    createTeamInProgress: false,
    loadTeamsInProgress: false,
    addByEmailToTeamInProgress: false,
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

    case ADD_EMAIL_TO_TEAM_ACTION: {
      return {
        ...state,
        addByEmailToTeamError: null,
        addByEmailToTeamInProgress: true,
      };
    }

    case ADD_EMAIL_TO_TEAM_ACTION_SUCCEEDED: {
      return {
        ...state,
        addByEmailToTeamError: null,
        addByEmailToTeamInProgress: false,
      };
    }

    case ADD_EMAIL_TO_TEAM_ACTION_FAILED: {
      return {
        ...state,
        addByEmailToTeamError: action.payload,
        addByEmailToTeamInProgress: false,
      };
    }

    default: {
      return state;
    }
  }
}
