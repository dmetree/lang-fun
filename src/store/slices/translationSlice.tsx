import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../store';
import { translation } from '../api/translatorApi'

export interface TranslationState {
  phrase: string;
  status: 'idle' | 'loading' | 'failed'; 
}

const initialState: TranslationState = {
  phrase: '',
  status: 'idle',
}

export const translateAsync = createAsyncThunk(
  'translate/fetchTranslate',
  async (phrase: string) => {
    const response = await translation;
    return response;
  }
)

export const translationSlice = createSlice({
  name: 'translation',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
    .addCase(translateAsync.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(translateAsync.fulfilled, (state, action) => {
      state.status = 'idle';
      // state.phrase = action.payload;
    })
    .addCase(translateAsync.rejected, (state) => {
      state.status = 'failed';
    });
  }
});

export default translationSlice.reducer;
