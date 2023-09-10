import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import React from 'react';

export const ImageGallery = ({ images }) => {
  return (
    <>
      <ul className="gallery">
        {images.map(({ id, webformatURL, largeImageURL }) => (
          <ImageGalleryItem
            key={id}
            webImage={webformatURL}
            largeImage={largeImageURL}
          />
        ))}
      </ul>
    </>
  );
};
