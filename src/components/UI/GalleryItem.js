import React from 'react';
import clsx from 'clsx';

import Button from './Controls/Button';
import classes from './GalleryItem.module.scss';

const GalleryItem = ({ src, alt, btnText, currentItem, imageId, onButtonClick, btnId }) => {
  const buttonClickHandler = () => onButtonClick(btnId, imageId);

  return (
    <div className={clsx(classes['image-item'])}>
      <img src={src} alt={alt} />
      <div className={clsx(classes['favourite'])}>
        <div
          className={clsx(
            ((currentItem !== 'breeds' && currentItem !== 'search') && classes['favourite-btn']),
            currentItem === 'breeds' && classes['info-btn'],
            currentItem === 'search' && classes['info-btn']
          )}
        >
          <Button onButtonClick={buttonClickHandler} isDisabled={!!!btnId} design="white">
            {btnText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GalleryItem;
