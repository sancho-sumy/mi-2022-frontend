import React from 'react';
import Search from '../UI/Search';
import Button from '../UI/Controls/Button';

import sectionsList from '../../assets/sectionsList';
import classes from './Header.module.scss';

const Header = ({ activeItem, currentItem }) => {
  const itemsList = sectionsList.map(
    (item) =>
      item.location === 'header' && (
        <div onClick={() => onButtonClick(item.name)} className={classes.btn} key={item.name}>
          <Button isActive={currentItem === item.name && 'active'}>
            <span style={{ fontSize: '30px' }} className={item.image}></span>
          </Button>
        </div>
      )
  );

  const onButtonClick = (name) => {
    activeItem(name);
  };

  return (
    <header className={classes.header}>
      <Search />
      {itemsList}
    </header>
  );
};

export default Header;
