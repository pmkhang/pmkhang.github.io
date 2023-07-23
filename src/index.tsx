import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalStyle from './GlobalStyles/GlobalStyles';
import { DarkModeProvider } from 'DarkMode/DarkModeContext';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
   <React.StrictMode>
      <GlobalStyle>
         <DarkModeProvider>
            <App />
         </DarkModeProvider>
      </GlobalStyle>
   </React.StrictMode>,
);

reportWebVitals();
