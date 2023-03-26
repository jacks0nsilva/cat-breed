import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CatContent } from './GlobalStorage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CatContent>
      <App />
    </CatContent>
  </React.StrictMode>
);

