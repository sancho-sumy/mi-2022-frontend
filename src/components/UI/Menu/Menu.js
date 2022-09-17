import React from 'react';
import MenuItem from './MenuItem';
import classes from './Menu.module.css';

import ItemBreedsImg from './item-breeds.png';
import ItemVotingImg from './item-voting.png';
import ItemGalleryImg from './item-gallery.png';

const MENU_ITEMS = [
  {
    name: 'Voting',
    image: ItemVotingImg,
    background: '#B4B7FF',
    path: '/voting',
  },
  {
    name: 'Breeds',
    image: ItemBreedsImg,
    background: '#97EAB9',
    path: '/breeds',
  },
  {
    name: 'Gallery',
    image: ItemGalleryImg,
    background: '#FFD280',
    path: '/gallery',
  },
];

const itemsList = MENU_ITEMS.map((item) => (
  <MenuItem key={item.name} name={item.name} image={item.image} background={item.background} link={item.path} />
));

const Menu = () => {
  return <div className={classes.wrapper}>{itemsList}</div>;
};

export default Menu;
