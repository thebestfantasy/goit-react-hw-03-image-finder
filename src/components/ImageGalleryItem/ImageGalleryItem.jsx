import React from 'react';

export const ImageGalleryItem = ({ webImage, tags }) => {
  return (
    <>
      <li className="gallery-item">
        <img src={webImage} alt={tags} />
      </li>
    </>
  );
};
