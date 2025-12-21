export interface UserData {
  username: string;
  name: string;
  email: string;
  dateOfBirth: string;
  dateOfRegistration: string;
}

export interface AuthState {
  user: UserData | null;
  isAuthenticated: boolean;
}

export interface RequestUserData {
  username: string;
  password: string;
}

export interface ResponseSignIn {
  user: UserData;
  isSuccess: boolean;
}
