import React, { useState, useEffect, useRef } from "react";
import { HomeImages } from "./HomeImagesData";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const ImageSlider = ({ img }) => {
  const [currentImg, setCurrentImg] = useState(0);
  const length = img.length;

  const [userInteracted, setUserInteracted] = useState(false);
  const slideTimeout = useRef(null);

  const nextSlide = () => {
    setCurrentImg(currentImg === length - 1 ? 0 : currentImg + 1);
  };

  const prevSlide = () => {
    setCurrentImg(currentImg === 0 ? length - 1 : currentImg - 1);
  };

  useEffect(() => {
    slideTimeout.current = userInteracted ? null : setTimeout(nextSlide, 4000);

    return () => {
      clearTimeout(slideTimeout.current);
    };
  }, [currentImg, userInteracted]);

  const stopAutoSlide = () => {
    setUserInteracted(true);
    clearTimeout(slideTimeout.current);
  };

  if (!Array.isArray(img) || img.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      <FaArrowCircleLeft
        className="left-arrow"
        onClick={() => {
          stopAutoSlide();
          prevSlide();
        }}
      />
      <FaArrowCircleRight
        className="right-arrow"
        onClick={() => {
          stopAutoSlide();
          nextSlide();
        }}
      />
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
