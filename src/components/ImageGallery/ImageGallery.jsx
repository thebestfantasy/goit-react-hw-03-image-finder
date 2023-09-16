import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import Modal from 'components/Modal/Modal';
import { Component } from 'react';

import React from 'react';
import { ImageGalleryStyled } from './imageGallery.Styled';

class ImageGallery extends Component {
  state = {
    selectedImage: null,
  };

  // componentDidMount() {
  //   document.addEventListener('keydown', this.handleKeyDown);
  // }

  // componentWillUnmount() {
  //   document.removeEventListener('keydown', this.handleKeyDown);
  // }

  openModal = image => {
    this.setState({ selectedImage: image });
  };

  closeModal = () => {
    this.setState({ selectedImage: null });
  };

  // handleKeyDown = e => {
  //   if (e.keyCode === 27) {
  //     this.closeModal();
  //   }
  // };

  // handleBackDropClick = e => {
  //   if (e.currentTarget === e.target) this.closeModal();
  // };

  render() {
    const { selectedImage } = this.state;
    return (
      <>
        <ImageGalleryStyled>
          {this.props.images.map(image => (
            <ImageGalleryItem
              key={image.id}
              webImage={image.webformatURL}
              tags={image.tags}
              onClick={() => this.openModal(image)}
            ></ImageGalleryItem>
          ))}
        </ImageGalleryStyled>
        {selectedImage && (
          <Modal
            imgURL={selectedImage.largeImageURL}
            alt={selectedImage.tags}
            closeModal={this.closeModal}
          >
            children
          </Modal>
        )}
      </>
    );
  }
}

export default ImageGallery;
