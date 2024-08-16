import React from 'react';
import { createRoot } from 'react-dom/client'; // Correct import
import App from './App.jsx';
import './index.css';
import 'antd/dist/reset.css';
import { TokenProvider } from './context/TokenContext';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TokenProvider>
    <App />

    </TokenProvider>
  </React.StrictMode>,
);
