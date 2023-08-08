// languageSlice.ts

import { createSlice } from '@reduxjs/toolkit';

interface LanguageState {
   language: 'vi' | 'en';
}

const initialState: LanguageState = {
   language: 'en',
};

const languageSlice = createSlice({
   name: 'language',
   initialState,
   reducers: {
      setLanguage(state, action) {
         state.language = action.payload;
      },
   },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
