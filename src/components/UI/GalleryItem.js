import React from 'react';
import clsx from 'clsx';

import Button from './Controls/Button';
import classes from './GalleryItem.module.scss';

const GalleryItem = ({ src, alt, btnText, currentItem, imageId, onButtonClick, btnId }) => {
  return (
    <div className={clsx(classes['image-item'])}>
      <img src={src} alt={alt} />
      <div className={clsx(classes['favourite'])}>
        <div
          onClick={() => onButtonClick(btnId, imageId)}
          className={clsx(
            currentItem !== 'breeds' && classes['btn'],
            currentItem === 'breeds' && classes['favourite-btn']
          )}
        >
          <Button>{btnText}</Button>
        </div>
      </div>
    </div>
  );
};

export default GalleryItem;
