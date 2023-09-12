import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import React from 'react';

export const ImageGallery = ({ images }) => {
  return (
    <>
      <ul className="gallery">
        {images.map(({ id, webformatURL, tags }) => (
          <ImageGalleryItem key={id} webImage={webformatURL} tags={tags} />
        ))}
      </ul>
    </>
  );
};
