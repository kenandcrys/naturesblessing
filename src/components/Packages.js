import React from "react";
import "../App.css";
import weddingPicture from "../images/Wedding.png";
import kids from "../images/kids.png";
import nesem from "../images/nesem.png";
import sunflowers from "../images/sunflowers.png";

function Package({ imageSrc, packageDetails }) {
  return (
    <div className="col-md-6">
      <div className="package-picture">
        <img src={imageSrc} className="img-fluid" alt={packageDetails.name} />
      </div>
      <div className="package-details">
        <h2 className={packageDetails.name}>{packageDetails.name} Package</h2>
        <p>Package includes:</p>
        <ul>
          <li>{packageDetails.duration}</li>
          <li>{packageDetails.editedImages} edited digital images</li>
          {packageDetails.includePrintRelease && <li>Print Release</li>}
        </ul>
        <p>Price: ${packageDetails.price}</p>
      </div>
    </div>
  );
}

export default function Packages() {
  const packages = [
    {
      imageSrc: nesem,
      packageDetails: {
        name: "Bronze",
        duration: "1 hour Session",
        editedImages: 15,
        includePrintRelease: true,
        price: 75,
      },
    },
    {
      imageSrc: kids,
      packageDetails: {
        name: "Silver",
        duration: "2 hour Session",
        editedImages: 30,
        includePrintRelease: true,
        price: 125,
      },
    },
    {
      imageSrc: sunflowers,
      packageDetails: {
        name: "Gold",
        duration: "4 hour Session",
        editedImages: 150,
        includePrintRelease: true,
        price: 225,
      },
    },
    {
      imageSrc: weddingPicture,
      packageDetails: {
        name: "Platinum",
        duration: "6 hour Session",
        editedImages: 350,
        includePrintRelease: true,
        price: 400,
      },
    },
  ];

  return (
    <div className="packages-container">
      <div className="row">
        {packages.map((pkg, index) => (
          <Package
            key={index}
            imageSrc={pkg.imageSrc}
            packageDetails={pkg.packageDetails}
          />
        ))}
      </div>
    </div>
  );
}
