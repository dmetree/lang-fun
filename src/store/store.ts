import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import counterReducer from './slices/counterSlice';
import phrasePairReducer from './slices/phrasepairSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    phrase_pair: phrasePairReducer,
    auth: authReducer,
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
