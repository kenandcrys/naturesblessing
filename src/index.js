import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './App.css'; // Your main CSS file
import App from './App';
import reportWebVitals from './reportWebVitals';
import Packages from './components/Packages';
import Contact from './components/Contact';
import About from "./components/About"
import 'normalize.css';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Packages" element={<Packages />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
    </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
);

reportWebVitals();

