import React from 'react';
import { Vortex } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div>
      <Vortex
        visible={true}
        height="150"
        width="150"
        ariaLabel="blocks-loading"
        wrapperClass="blocks-wrapper"
      />
    </div>
  );
};

export default Loader;
