import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const rootElement = document.getElementById('root');
const rootApplication = ReactDOM.createRoot(rootElement);

rootApplication.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
