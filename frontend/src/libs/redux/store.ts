import { configureStore } from "@reduxjs/toolkit";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const store = configureStore({
  reducer: {},
});

export default store;
