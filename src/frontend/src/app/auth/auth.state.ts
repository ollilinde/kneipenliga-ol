export interface AuthState {
  authToken?: string;
  user?: any;
  loginInProgress: boolean;
  loginError?: any;
  registrationInProgress: boolean;
  registrationError?: any;
}

export const InitialAuthState: AuthState = {
  loginInProgress: false,
  registrationInProgress: false,
};
