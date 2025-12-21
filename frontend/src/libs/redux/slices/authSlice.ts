import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import type { AuthState } from "@utils/types";

const InitialAuthState: AuthState = {
  user: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState: InitialAuthState,
  reducers: {
    setUser: (state, action: PayloadAction<AuthState>) => {
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
