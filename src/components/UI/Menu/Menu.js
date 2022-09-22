import React from 'react';
import MenuItem from './MenuItem';
import classes from './Menu.module.scss';

import sectionsList from '../../../assets/sectionsList';

const Menu = ({ currentItem, activeItem }) => {
  const activeItemHandler = (item) => {
    activeItem(item);
  };

  const itemsList = sectionsList.map(
    (item) =>
      item.location === 'mainMenu' && (
        <MenuItem
          key={item.name}
          btnText={item.name}
          image={item.image}
          background={item.background}
          link={item.path}
          currentItem={currentItem}
          activeItem={activeItemHandler}
        />
      )
  );

  return <nav className={classes.wrapper}>{itemsList}</nav>;
};

export default Menu;
