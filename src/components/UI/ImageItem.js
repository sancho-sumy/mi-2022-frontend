import clsx from 'clsx';
import React from 'react';

import Button from './Controls/Button';
import classes from './ImageItem.module.scss';

function ImageItem({ src, alt, btnText, currentItem, id, onButtonClick }) {
  return (
    <div className={clsx(classes['image-item'])}>
      <img src={src} alt={alt} />
      <div className={clsx(classes['favourite'])}>
        <div
          onClick={() => onButtonClick(id)}
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
}

export default ImageItem;
