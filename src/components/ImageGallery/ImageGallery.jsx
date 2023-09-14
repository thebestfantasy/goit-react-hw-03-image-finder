import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import Modal from 'components/Modal/Modal';
import { Component } from 'react';

import React from 'react';

class ImageGallery extends Component {
  state = {
    selectedImage: null,
  };

  images = this.props.images;

  openModal = image => {
    this.setState({ selectedImage: image });
  };

  closeModal = () => {
    this.setState({ selectedImage: null });
  };

  render() {
    const { selectedImage } = this.state;
    return (
      <>
        <ul className="gallery">
          {this.images.map(image => (
            <ImageGalleryItem
              key={image.id}
              webImage={image.webformatURL}
              tags={image.tags}
              onClick={() => this.openModal(image)}
              // image={image}
            ></ImageGalleryItem>
          ))}
        </ul>
        {selectedImage && (
          <Modal
            imgURL={selectedImage.largeImageURL}
            alt={selectedImage.tags}
            closeModal={this.closeModal}
            // onKeyDown={this.handleKeyDown}
          >
            children
          </Modal>
        )}
      </>
    );
  }
}

export default ImageGallery;
