export interface MeState {
  createTeamInProgress: boolean;
  createTeamError?: any;
  loadTeamsInProgress: boolean;
  loadTeamsError?: any;
  addByEmailToTeamInProgress: boolean;
  addByEmailToTeamError?: any;
  teams?: any[];
}

export const InitialAuthState: MeState = {
  createTeamInProgress: false,
  loadTeamsInProgress: false,
  addByEmailToTeamInProgress: false,
};
