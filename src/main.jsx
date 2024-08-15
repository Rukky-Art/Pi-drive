import React from 'react';
import { createRoot } from 'react-dom/client'; // Correct import
import App from './App.jsx';
import './index.css';
import 'antd/dist/reset.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
