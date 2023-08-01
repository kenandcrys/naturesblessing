import React from 'react';
import './App.css';
import CircleImage from './components/CircleImage';
import Nav from "./components/NavBar"
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <h4>Nature's Blessings Photography</h4>
      <CircleImage />
      <p className='welcome' style={{ fontSize: "32px" }}>
        Welcome to our serene world where you can experience the Soft Side of Nature's Blessings. Step into a realm of tranquility and immerse yourself in the captivating beauty that surrounds us.
        Our collection of photos is carefully curated to showcase the most enchanting and tender aspects of nature.
        We take pride in presenting you with a gallery that is not only visually stunning but also thoughtfully composed. This passionate photographer has an eye for detail, ensuring that every photo is a masterpiece of artistry.
      </p>
      <Footer />
       
    </div>
  );
}

export default App;
