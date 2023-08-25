import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './style.scss';
import App from './app';

const rootElement = document.getElementById('root');
const rootApplication = ReactDOM.createRoot(rootElement);

rootApplication.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
