import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.sass';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
   </BrowserRouter>
  </React.StrictMode>
);
