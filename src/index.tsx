import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from "react-router-dom";
import './index.sass';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  // <React.StrictMode>
    <HashRouter basename="/">
      <App />
    </HashRouter>
  // </React.StrictMode>
);
