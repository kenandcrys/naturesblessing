import React from 'react';
import './App.css';
import CircleImage from './components/CircleImage';
function App() {
  return (
    <div>
    <div className="App">
      <nav className='nav-bar'>
          <a style={{textDecoration: "none", color: "white"}} href="about.asp">About</a>&nbsp;
          <a style={{textDecoration: "none", color: "white"}} href="default.asp">Home</a>&nbsp;
          <a style={{textDecoration: "none", color: "white"}} href="pictures.asp">Pictures</a>&nbsp;
          <a style={{textDecoration: "none", color: "white"}} href="contact.asp">Contact</a>
      </nav>
      Nature's Blessings Photography
      <p className='click-on-photo' style={{fontSize: "20px"}}>Click on a thumbnail to expand photo</p>
      <CircleImage />
    </div>
    
    </div>
  );
}

export default App;