import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  user: {
    username: string;
    name: string;
    email: string;
    dateOfBirth: string;
    dateOfRegistration: string;
  } | null;
  isAuthenticated: boolean;
}

const InitialUserState: UserState = {
  user: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "userSlice",
  initialState: InitialUserState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state.user = action.payload.user;
      state.isAuthenticated = true;
    },
    removeUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { setUser, removeUser } = authSlice.actions;

export default authSlice.reducer;
