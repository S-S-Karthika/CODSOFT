


import React from 'react';
import ReactDOM from 'react-dom/client';
 import "./App.css" // Issue 1: Check the path to index.css
import App from './App';
// Commenting out the import for reportWebVitals if you don't need it
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
