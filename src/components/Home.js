import React, { useState, useEffect } from "react";
import CircleImage from "./CircleImage";

export default function Home() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Update the windowWidth when the window is resized
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="App">
      <CircleImage />
      <p className="welcome">
        {windowWidth >= 768 ? (
          "Welcome to our serene world where you can experience the Soft Side of Nature's Blessings. Step into a realm of tranquility and immerse yourself in the captivating beauty that surrounds us. Our collection of photos is carefully curated to showcase the most enchanting and tender aspects of nature. We take pride in presenting you with a gallery that is not only visually stunning but also thoughtfully composed. This passionate photographer has an eye for detail, ensuring that every photo is a masterpiece of artistry."
        ) : (
          "Half of the text for smaller screens."
        )}
      </p>
    </div>
  );
}