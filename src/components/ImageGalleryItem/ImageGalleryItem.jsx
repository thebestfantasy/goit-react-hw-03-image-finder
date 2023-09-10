import React from 'react';

export const ImageGalleryItem = ({ key, webImage, largeImage }) => {
  return (
    <>
      <li key={key} className="gallery-item">
        <img src={webImage} alt="photoCard" />
      </li>
    </>
  );
};
