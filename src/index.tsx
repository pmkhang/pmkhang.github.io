import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalStyle from './GlobalStyles/GlobalStyles';
import { DarkModeProvider } from 'DarkMode/DarkModeContext';
import { LanguageProvider } from 'SwitchLanguage/Language';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
   <React.StrictMode>
      <GlobalStyle>
         <DarkModeProvider>
            <LanguageProvider>
               <App />
            </LanguageProvider>
         </DarkModeProvider>
      </GlobalStyle>
   </React.StrictMode>,
);

reportWebVitals();
