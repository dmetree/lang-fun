import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../store';


export interface IPhrasePair {
  input: string;
  translation: string;
}

const initialState: IPhrasePair  = {
  input: '',
  translation: '',
}

export const phrasepairSlice = createSlice({
  name: 'phrase_pair',
  initialState,
  reducers: {
   
    saveInput: (state, action: PayloadAction<string>) => {
      state.input = action.payload;
    },
    saveTranslation: (state, action: PayloadAction<string>) => {
      state.translation = action.payload;
    },
  },
});

export const { saveInput, saveTranslation } = phrasepairSlice.actions;
export const phraseInput = (state: RootState) => state.phrase_pair.input;
export const phraseTranslation = (state: RootState) => state.phrase_pair.translation;


export default phrasepairSlice.reducer;
