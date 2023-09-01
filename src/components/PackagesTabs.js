import { useState } from "react";
import "../App.css";
import Nav from "./NavBar";
import CircleImage from "./CircleImage";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const packageDetails = [
    {
      name: "Bronze",
      duration: "1 hour Session",
      editedImages: 15,
      includePrintRelease: true,
      price: 75,
    },
    {
      name: "Silver",
      duration: "2 hour Session",
      editedImages: 30,
      includePrintRelease: true,
      price: 125,
    },
    {
      name: "Gold",
      duration: "4 hour Session",
      editedImages: 150,
      includePrintRelease: true,
      price: 225,
    },
    {
      name: "Platinum",
      duration: "6 hour Session",
      editedImages: 350,
      includePrintRelease: true,
      price: 400,
    },
  ];

  return (
    <>
      <Nav />

      <div className="tabs-container">
        <div className="block-tabs">
          {packageDetails.map((pkg, index) => (
            <div
              key={index}
              className={
                `tabs ${pkg.name.toLowerCase()} ` +
                (toggleState === index + 1 ? "active-tab" : "")
              }
              onClick={() => toggleTab(index + 1)}
            >
              {pkg.name} Package
            </div>
          ))}
        </div>

        <div className="content-tabs">
          {packageDetails.map(
            (pkg, index) =>
              toggleState === index + 1 && (
                <div key={index} className="content active-content">
                  <h2>{pkg.name} Package</h2>
                  <div>Duration: {pkg.duration}</div>
                  <div>Edited Images: {pkg.editedImages}</div>
                  <div>
                    Print Release:
                    {pkg.includePrintRelease ? "Included" : "Not Included"}
                  </div>
                  <div>Price: ${pkg.price}</div>
                </div>
              )
          )}
        </div>
      </div>
    </>
  );
}

export default Tabs;
