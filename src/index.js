import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { TodoContextProvider } from './context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <TodoContextProvider>

  <React.StrictMode>
    <App />
  </React.StrictMode>
  </TodoContextProvider>
);
