import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { TranslateProvider } from './context/translate.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TranslateProvider>
      <App />
    </TranslateProvider>
  </React.StrictMode>
);
