import React, { useState, useEffect } from "react";
import "./CircleImage.css";

import image1 from "../images/image1.png";
import image2 from "../images/image2.png";
import image3 from "../images/image3.png";
import image4 from "../images/image4.png";
import image5 from "../images/image5.png";
import image6 from "../images/image6.png";
import image7 from "../images/image7.png";
import image8 from "../images/image8.png";
import image9 from "../images/image9.png";
import image10 from "../images/image10.png";
import image11 from "../images/image11.png";
import image12 from "../images/image12.png";
import image14 from "../images/image14.png";
import image15 from "../images/image15.png";

const images = [
  image2,
  image1,
  image3,
  image15,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image14,
  image10,
  image11,
  image12,
];

const CircleImage = () => {
  const [expandedIndex, setExpandedIndex] = useState(9);

  const handleClick = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (expandedIndex + 1) % images.length;
      setExpandedIndex(nextIndex);
    }, 2000); // Change the duration of each rotation in milliseconds (e.g., 2000ms = 2 seconds)

    return () => clearInterval(interval);
  }, [expandedIndex]);



  
  useEffect(() => {
    // Calculate the angle between each image
    const angleIncrement = (2 * Math.PI) / images.length;

    images.forEach((image, index) => {
      const angle =
        angleIncrement * index + 2 * Math.PI * (expandedIndex / images.length);
      const radius = 200; // Adjust this value to set the radius of the circular pattern

      // Calculate the position of the image in the circle
      const x = radius * Math.cos(angle);
      const y = radius * Math.sin(angle);

      const imageElement = document.getElementById(`image-${index}`);
      let expandedX;
      let expandedY;
      if (expandedIndex === index) {
        if (window.innerWidth < 768 ){
          // Center and enlarge the selected image when expanded
         expandedX = 0; // Centered along x-axis
         expandedY = 0; // Centered along y-axis
         imageElement.style.width = "12rem";
         imageElement.style.height = "12rem";
         imageElement.style.borderRadius = "10%"; 
        } else {
          // Center and enlarge the selected image when expanded
         expandedX = 0; // Centered along x-axis
         expandedY = 0; // Centered along y-axis
         imageElement.style.width = "15rem";
         imageElement.style.height = "15rem";
         imageElement.style.borderRadius = "100%"; // 100% will make it fully round
        }
        
        imageElement.style.transform = `translate(${expandedX}px, ${expandedY}px) scale(2)`; // Adjust the scale value as needed
        
      } else {
        // Position the images in a circular pattern
        imageElement.style.transform = `translate(${x}px, ${y}px)`;
        imageElement.style.width = "8rem"; // Adjust this value based on your original image size
        imageElement.style.height = "8rem"; // Adjust this value based on your original image size
        imageElement.style.borderRadius = "50%"; // Adjust this value based on your original image size
        
      }
    });
  }, [expandedIndex]);

  return (
    <div className="thumbnail-container">
      {images.map((image, index) => (
        <img
          key={index}
          id={`image-${index}`}
          src={image}
          alt={"Images of people"}
          className={`thumbnail-image`}
          style={{
            transform:
              expandedIndex === index
                ? "translate(-50%, -50%) scale(2)"
                : "scale(1)", // Adjust the scale value as needed
            width: expandedIndex === index ? "400px" : "150px",
            height: expandedIndex === index ? "400px" : "150px",
            borderRadius: expandedIndex === index ? "100%" : "50%",
            position: "absolute", // Add this to ensure proper positioning
            display: index === expandedIndex || window.innerWidth > 768 ? "block" : "none", // Hide images below 768px
            
          }}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};
  


export default CircleImage;
