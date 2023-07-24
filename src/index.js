import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css'; // Your main CSS file
import App from './App';
import reportWebVitals from './reportWebVitals';
import Packages from './components/Packages';
import Contact from './components/Contact';
import About from "./components/About"
import 'normalize.css';
const style= {textDecoration: "none", color: "purple", border: "2px solid grey", borderRadius: "10px", backgroundColor: "lightpink", boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)"};

<link href="https://fonts.googleapis.com/css2?family=FontName&display=swap" rel="stylesheet"></link>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <nav className='nav-bar'>
      <Link style={style} to="/about">About</Link>&nbsp;
      <Link style={style} to="/">Home</Link>&nbsp;
      <Link style={style} to="/Packages">Packages</Link>&nbsp;
      <Link style={style} to="/contact">Contact</Link>
      </nav>
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

