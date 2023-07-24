import React from 'react';
import './App.css';
import CircleImage from './components/CircleImage';



function App() {
  return (
    <div className="App">
      
      <h4 style={{
        marginTop: "10px",
        marginBottom: "170px",
        color: "purple", // Set the text color to white
        textShadow: "2px 4px 6px rgba(0, 0, 0, 0.7)", // Add the text shadow effect
        WebkitTextStroke: "2px darkgray", // Outline the text with a dark gray color (for WebKit browsers)
        textStroke: "1px darkgray", // Outline the text with a dark gray color (for other browsers)
      }}>Nature's Blessings Photography</h4>
      <div style={{ display: "flex",justifyContent:"left", marginRight: "575px" }}>
        <CircleImage />
        
      </div>
       
      <div style={{ display: "flex", justifyContent: "right",marginRight:"200px", marginTop: "-450px" }}>
        <p className='welcome' style={{ fontSize: "30px", maxWidth: "500px" }}>
          Welcome to our serene world where you can experience the Soft Side of Nature's Blessings. Step into a realm of tranquility and immerse yourself in the captivating beauty that surrounds us.
          Our collection of photos is carefully curated to showcase the most enchanting and tender aspects of nature.
          We take pride in presenting you with a gallery that is not only visually stunning but also thoughtfully composed. This passionate photographer has an eye for detail, ensuring that every photo is a masterpiece of artistry.
        </p>
      </div>
    </div>
  );
}

export default App;
