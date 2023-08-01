import React from 'react';

const SilverPackage = () => {
  const packageDetails = {
    name: 'Silver',
    duration: '2 hour Session',
    editedImages: 30,
    includePrintRelease: true,
    price: 125,
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

export default SilverPackage;