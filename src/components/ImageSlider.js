import React, { useState } from "react";
import { HomeImages } from "./HomeImagesData";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const ImageSlider = ({ img }) => {
  const [currentImg, setCurrentImg] = useState(0);
  const length = img.length;

  const nextSlide = () => {
    setCurrentImg(currentImg === length - 1 ? 0 : currentImg + 1);
  };

  const prevSlide = () => {
    setCurrentImg(currentImg === 0 ? length - 1 : currentImg - 1);
  };

  if (!Array.isArray(img) || img.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      <FaArrowCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowCircleRight className="right-arrow" onClick={nextSlide} />
      {HomeImages.map((img, index) => {
        return (
          <div
            key={index}
            className={index === currentImg ? "slide active" : "slide"}
          >
            {index === currentImg ? (
              <img
                src={img.image}
                alt="photograph image"
                className="slider-image"
              />
            ) : (
              ""
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
