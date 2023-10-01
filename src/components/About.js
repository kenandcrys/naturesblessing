import React from "react";
import "./About.css";

import Debbie from "../images/Debbie.png";
import DebbieLaynie from "../images/Debbie-Laynie.png";
import DebbieLaynie2 from "../images/Debbie-Laynie2.png";

const About = () => {
  return (
    <div class="container text-center">
      <div class="about">
        <div class="about-img">
          <div id="carouselExampleDark" class="carousel carousel-dark slide">
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src={Debbie}
                  class="d-block w-100 radius"
                  alt={"CouplesPhoto"}
                />
              </div>
              <div class="carousel-item">
                <img
                  src={DebbieLaynie}
                  class="d-block w-100 radius"
                  alt={"BurlesqueStylePhoto"}
                />
              </div>
              <div class="carousel-item">
                <img
                  src={DebbieLaynie2}
                  class="d-block w-100 radius"
                  alt={"BabyOnBedWithFireplace"}
                />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div class="about-text">
          <div>
            <h3>
              Debbie Esterlein, a mother, finds immense joy in
              capturing the perfect moment through the lens of her camera. Being
              able to create lasting memories for families, fills her with a
              wonderful feeling. Debbie has channeled her artistic skills into photography over the
              past two decades.Debbie's upbringing, where her family couldn't afford frequent
              family pictures, has instilled in her a sense of empathy and
              understanding. She is grateful to be able to offer her services at affordable
              rates to help families cherish moments that will last a lifetime.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
