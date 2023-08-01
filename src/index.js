import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './App.css'; // Your main CSS file
import App from './App';
import reportWebVitals from './reportWebVitals';
import Contact from './components/Contact';
import About from "./components/About"
import 'normalize.css';
import BronzePackage from './components/Packages/BronzePackage';
import SilverPackage from './components/Packages/SilverPackage';
import GoldPackage from './components/Packages/GoldPackage';
import PlatinumPackage from './components/Packages/PlatinumPackage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="Packages/Bronze" element={<BronzePackage />} />
      <Route path="Packages/Silver" element={<SilverPackage />} />
      <Route path="Packages/Gold" element={<GoldPackage />} />
      <Route path="Packages/Platinum" element={<PlatinumPackage />} />
      <Route path="/" element={<App />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/About" element={<About />} />
    </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
);

reportWebVitals();

