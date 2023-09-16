import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import Modal from 'components/Modal/Modal';
import { Component } from 'react';
import { ImageGalleryStyled } from './imageGallery.Styled';

class ImageGallery extends Component {
  state = {
    selectedImage: null,
  };

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
