import React from 'react';
import MenuItem from './MenuItem';
import classes from './Menu.module.scss';

import ItemBreedsImg from './item-breeds.png';
import ItemVotingImg from './item-voting.png';
import ItemGalleryImg from './item-gallery.png';

const MENU_ITEMS = [
  {
    name: 'voting',
    image: ItemVotingImg,
    background: '#B4B7FF',
    path: '/voting',
  },
  {
    name: 'breeds',
    image: ItemBreedsImg,
    background: '#97EAB9',
    path: '/breeds',
  },
  {
    name: 'gallery',
    image: ItemGalleryImg,
    background: '#FFD280',
    path: '/gallery',
  },
];

const Menu = ({ currentItem, activeItem }) => {
  const activeItemHandler = (item) => {
    activeItem(item);
  };

  const itemsList = MENU_ITEMS.map((item) => (
    <MenuItem
      key={item.name}
      name={item.name}
      image={item.image}
      background={item.background}
      link={item.path}
      currentItem={currentItem}
      activeItem={activeItemHandler}
    />
  ));

  return <nav className={classes.wrapper}>{itemsList}</nav>;
};

export default Menu;
