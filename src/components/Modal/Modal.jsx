import React from 'react';
import { ModalStyled, Overlay } from './Modal.Styled';

const Modal = ({ imgURL, alt, closeModal }) => {
  return (
    <Overlay onClick={closeModal}>
      {/* <Overlay onClick={closeModal} onKeyDown={onKeyDown}> */}
      <ModalStyled>
        <img src={imgURL} alt={alt} />
      </ModalStyled>
    </Overlay>
  );
};

export default Modal;
