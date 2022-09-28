import React from 'react';
import Search from '../UI/Search';
import Button from '../UI/Controls/Button';

import sectionsList from '../../assets/sectionsList';
import classes from './Header.module.scss';

const Header = ({ activeItem, currentItem, setSearchQueryParams }) => {
  const onButtonClick = (name) => {
    activeItem(name);
  };

  const searchSubmitHandler = (query) => {
    setSearchQueryParams(query);
  };

  const itemsList = sectionsList.map(
    (item) =>
      item.location === 'header' && (
        <div className={classes.btn} key={item.name}>
          <Button
            onButtonClick={onButtonClick}
            btnId={item.name}
            isActive={currentItem === item.name && 'active'}
            design="white"
          >
            <span style={{ fontSize: '30px' }} className={item.image}></span>
          </Button>
        </div>
      )
  );

  return (
    <header className={classes.header}>
      <Search onSearchSubmit={searchSubmitHandler} currentItem={currentItem} />
      {itemsList}
    </header>
  );
};

export default Header;
