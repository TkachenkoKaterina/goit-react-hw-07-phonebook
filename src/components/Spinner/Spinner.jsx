import { Audio } from 'react-loader-spinner';
import css from './Spinner.module.css';

import React from 'react';

const Spinner = () => {
  return (
    <div className={css.spinner}>
      <Audio
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="three-dots-loading"
        wrapperStyle
        wrapperClass
      />
    </div>
  );
};

export default Spinner;
