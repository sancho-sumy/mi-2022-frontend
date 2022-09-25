import clsx from 'clsx';
import React, { useState } from 'react';

import classes from './GalleryNavigation.module.scss';

const GalleryNavigation = (props) => {
  const [currentItem, setCurrentItem] = useState(0);

  const onItemClick = (itemIndex) => {
    props.onItemChange(itemIndex);
    setCurrentItem(itemIndex);
  };

  const itemsList = props.queryResult.map((_, index) => {
    return (
      <div
        key={index}
        className={clsx(classes.item, index === currentItem && classes.active)}
        onClick={() => onItemClick(index)}
      >
        {props.children}
      </div>
    );
  });

  return <div className={clsx(classes['gallery-navigation'])}>{itemsList}</div>;
};

export default GalleryNavigation;
