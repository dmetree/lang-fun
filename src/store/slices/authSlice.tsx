import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../store';

export interface IUserState {
  userObject: any;
  authIsReady: boolean;
}


const initialState: IUserState = {
  userObject: null,
  authIsReady: false,
};


export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    saveUserAuth: (state, action: PayloadAction<any>) => {
      state.userObject = action.payload;
    },
    checkAuth: (state, action: PayloadAction<boolean>) => {
      state.authIsReady = action.payload;
    }
  },
});

export const { saveUserAuth, checkAuth } = authSlice.actions;
export const userObject = (state: RootState) => state.auth.userObject;

export default authSlice.reducer;