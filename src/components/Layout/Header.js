import React from 'react';
import Search from '../UI/Search';
import Button from '../UI/Controls/Button';
import classes from './Header.module.scss';

const Header = ({ activeItem, currentItem }) => {
  const MENU_ITEMS = [
    {
      name: 'likes',
      icon: 'icon-like',
      path: '/likes',
    },
    {
      name: 'favourites',
      icon: 'icon-fav',
      path: '/favourites',
    },
    {
      name: 'dislikes',
      icon: 'icon-dislike',
      path: '/dislikes',
    },
  ];

  const itemsList = MENU_ITEMS.map((item) => (
    <div onClick={() => onButtonClick(item.name)} className={classes.btn}>
      <Button isActive={currentItem === item.name && 'active'}>
        <span style={{ fontSize: '30px' }} className={item.icon}></span>
      </Button>
    </div>
  ));

  const onButtonClick = (name) => {
    activeItem(name);
    console.log(name, 'button clicked');
  };

  return (
    <header className={classes.header}>
      <Search />
      {itemsList}
    </header>
  );
};

export default Header;
