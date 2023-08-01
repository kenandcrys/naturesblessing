import React from 'react';

const BronzePackage = () => {
  const packageDetails = {
    name: 'Bronze',
    duration: '1 hour Session',
    editedImages: 15,
    includePrintRelease: true,
    price: 75,
  };

  return (
    <div>
      <h2>{packageDetails.name} Package</h2>
      <p>Package includes:</p>
      <ul>
        <li>{packageDetails.duration}</li>
        <li>{packageDetails.editedImages} edited digital images</li>
        {packageDetails.includePrintRelease && <li>Print Release</li>}
      </ul>
      <p>Price: ${packageDetails.price}</p>
    </div>
  );
};

export default BronzePackage;
