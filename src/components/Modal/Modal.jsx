import { ModalStyled, Overlay } from './Modal.Styled';
import { Component } from 'react';

class Modal extends Component {
  state = {};

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.keyCode === 27) {
      this.props.closeModal();
    }
  };

  handleBackDropClick = e => {
    if (e.currentTarget === e.target) this.props.closeModal();
  };

  render() {
    return (
      <Overlay onClick={this.handleBackDropClick}>
        <ModalStyled>
          <img src={this.props.imgURL} alt={this.props.alt} />
        </ModalStyled>
      </Overlay>
    );
  }
}

export default Modal;
