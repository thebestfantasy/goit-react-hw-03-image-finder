import React from 'react';
import { LoadButton } from './Button.Styled';

const Button = ({ onClick }) => {
  return (
    <LoadButton type="button" onClick={onClick}>
      Load More
    </LoadButton>
  );
};

export default Button;
