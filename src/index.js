import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Your main CSS file
import '@fortawesome/fontawesome-free/css/all.min.css'; // Font Awesome CSS
import 'typeface-roboto'; // Google Fonts CSS
import App from './App';
import reportWebVitals from './reportWebVitals';

<link href="https://fonts.googleapis.com/css2?family=FontName&display=swap" rel="stylesheet"></link>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
