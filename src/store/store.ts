import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import translationReducer from './slices/translationSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    translation: translationReducer,
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