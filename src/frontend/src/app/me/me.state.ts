export interface MeState {
  createTeamInProgress: boolean;
  createTeamError?: any;
  loadTeamsInProgress: boolean;
  loadTeamsError?: any;
  teams?: any[];
}

export const InitialAuthState: MeState = {
  createTeamInProgress: false,
  loadTeamsInProgress: false,
};
