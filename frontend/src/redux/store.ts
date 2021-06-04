import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import projectAppReducer from "./projectAppSlice";

export const store = configureStore({
  reducer: {
    projectApp: projectAppReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
