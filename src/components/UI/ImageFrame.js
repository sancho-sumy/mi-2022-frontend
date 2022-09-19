import React from 'react';
import clsx from 'clsx';

import classes from './ImageFrame.module.scss';

const ImageFrame = (props) => {
  return (
    <div className={clsx(classes['image-frame'])}>
      {props.children}
    </div>
  );
};

export default ImageFrame;
