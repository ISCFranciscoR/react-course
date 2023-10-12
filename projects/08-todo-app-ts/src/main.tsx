import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import 'todomvc-app-css/index.css';
import { TodosProvider } from './context/todos.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TodosProvider>
      <App />
    </TodosProvider>
  </React.StrictMode>
);
