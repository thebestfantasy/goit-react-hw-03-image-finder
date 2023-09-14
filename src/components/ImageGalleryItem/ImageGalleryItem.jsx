import React from 'react';

export const ImageGalleryItem = ({ webImage, tags, onClick }) => {
  return (
    <li className="gallery-item" onClick={onClick}>
      <img src={webImage} alt={tags} />
    </li>
  );
};
