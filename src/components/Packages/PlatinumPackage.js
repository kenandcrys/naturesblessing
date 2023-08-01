import React from 'react';

const PlatinumPackage = () => {
  const packageDetails = {
    name: 'Platinum',
    duration: '6 hour Session',
    editedImages: 350,
    includePrintRelease: true,
    price: 400,
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

export default PlatinumPackage;