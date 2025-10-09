import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface InitialUserState {
  username: string | null;
  isAuthenticated: boolean;
  token: string | null;
}

interface UserState extends InitialUserState {
  username: string;
  token: string;
}

const InitialUserState: InitialUserState = {
  username: null,
  isAuthenticated: false,
  token: null,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState: InitialUserState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state.username = action.payload.username;
      state.isAuthenticated = true;
      state.token = action.payload.token;
    },
    logOut: (state) => {
      state.username = null;
      state.isAuthenticated = false;
      state.token = null;
    },
  },
});

export const { setUser, logOut } = userSlice.actions;

export default userSlice.reducer;
