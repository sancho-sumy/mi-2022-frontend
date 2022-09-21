import clsx from 'clsx';
import React, { useEffect, useState } from 'react';

import classes from './GalleryNavigation.module.scss';

const GalleryNavigation = (props) => {
  const [currentItem, setCurrentItem] = useState(null);

  useEffect(() => {
    setCurrentItem(1);
  }, []);

  const onItemClick = (itemIndex) => {
    props.onItemChange(itemIndex)
    setCurrentItem(itemIndex)
  }

  console.log(currentItem);

  const itemsList = props.queryResult.map((item, index) => {
    return <div onClick={() => onItemClick(index)} itemIndex={index}>{props.children}</div>;
  });

  return <div className={clsx(classes['gallery-navigation'])}>{itemsList}</div>;
};

export default GalleryNavigation;
