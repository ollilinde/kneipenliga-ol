export interface ResultsState {
  saveResultsInProgress: boolean;
  saveResultsError?: any;
}

export const InitialResultsState: ResultsState = {
  saveResultsInProgress: false,
};
