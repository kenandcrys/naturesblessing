import React from 'react';

const GoldPackage = () => {
  const packageDetails = {
    name: 'Gold',
    duration: '4 hour Session',
    editedImages: 150,
    includePrintRelease: true,
    price: 225,
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

export default GoldPackage;