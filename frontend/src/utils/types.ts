export interface UserData {
  username: string;
  name: string;
  email: string;
  dateOfBirth: string;
  dateOfRegistration: string;
}

export interface AuthState {
  user: Partial<UserData> | null;
  isAuthenticated: boolean;
}

export interface RequestUserData {
  username: string;
  password: string;
}

export interface ResponseAuth {
  user: Partial<UserData>;
  isSuccess: boolean;
}
