import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style/style.css";
import { Routers } from './Routes/Routes';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routers />
    </BrowserRouter>
  </React.StrictMode>
);
