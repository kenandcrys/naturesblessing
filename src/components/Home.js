// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CircleImage from "./CircleImage";
import image5 from "../images/image5.png";

export default function Home() {
  return (
    <>
      <div className="home-body">
        <div className="title">Nature's Blessings Photography</div>
        <img className="home-image" src={image5} />
        <p className="welcome" style={{ fontSize: "32px" }}>
          Welcome to our serene world where you can experience the Soft Side of
          Nature's Blessings. Step into a realm of tranquility and immerse
          yourself in the captivating beauty that surrounds us. Our collection
          of photos is carefully curated to showcase the most enchanting and
          tender aspects of nature. We take pride in presenting you with a
          gallery that is not only visually stunning but also thoughtfully
          composed. This passionate photographer has an eye for detail, ensuring
          that every photo is a masterpiece of artistry.
        </p>
      </div>
    </>
  );
}
