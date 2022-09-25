import React from 'react';
import clsx from 'clsx';

import classes from './GalleryWrapper.module.scss';

const GalleryWrapper = ({ imagesList }) => {
  return <div className={clsx(classes['gallery-wrapper'])}>
  {imagesList}
  </div>;
};

export default GalleryWrapper;
