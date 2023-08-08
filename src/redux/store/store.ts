// store.ts

import { configureStore } from '@reduxjs/toolkit';
import darkModeReducer from '../slice/darkModeSlice';
import languageReducer from '../slice/switchLanguage';

// Load initial state from localStorage (if available)
const loadState = () => {
   try {
      const serializedState = localStorage.getItem('state');
      if (serializedState === null) {
         return undefined;
      }
      return JSON.parse(serializedState);
   } catch (err) {
      return undefined;
   }
};

// Save state to localStorage
const saveState = (state: object) => {
   try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('state', serializedState);
   } catch {
      // Handle errors if needed
   }
};

// Load initial state
const initialState = loadState();

// Configure Redux store
export const store = configureStore({
   reducer: {
      darkMode: darkModeReducer,
      language: languageReducer,
   },
   preloadedState: initialState, // Set the preloaded state
});

// Subscribe to store updates and save state to localStorage
store.subscribe(() => {
   saveState(store.getState());
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
