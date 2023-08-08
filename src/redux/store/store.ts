// store.ts

import { configureStore, Middleware } from '@reduxjs/toolkit';
import darkModeReducer from '../slice/darkModeSlice';
import languageReducer from '../slice/switchLanguage';

const saveToLocalStorage: Middleware = (store) => (next) => (action) => {
   const result = next(action);
   localStorage.setItem('darkMode', JSON.stringify(store.getState().darkMode));
   localStorage.setItem('switchLanguage', JSON.stringify(store.getState().language)); // Lưu trạng thái ngôn ngữ
   return result;
};

const persistedDarkMode = localStorage.getItem('darkMode');
const persistedSwLanguage = localStorage.getItem('switchLanguage'); // Lấy trạng thái ngôn ngữ từ localStorage

// Chuyển sang sử dụng object cho preloadedState
const preloadedState = {
   darkMode: { darkMode: persistedDarkMode ? JSON.parse(persistedDarkMode) : false },
   language: persistedSwLanguage ? JSON.parse(persistedSwLanguage) : { language: 'vi' },
};

export const store = configureStore({
   reducer: {
      darkMode: darkModeReducer,
      language: languageReducer,
   },
   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(saveToLocalStorage),
   preloadedState,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
