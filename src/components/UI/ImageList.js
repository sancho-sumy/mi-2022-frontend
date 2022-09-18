import React from 'react';
import clsx from 'clsx';

import classes from './ImageList.module.scss';

const ImageList = ({ imagesList }) => {
  return <div className={clsx(classes['image-list'])}>{imagesList}</div>;
};

export default ImageList;
