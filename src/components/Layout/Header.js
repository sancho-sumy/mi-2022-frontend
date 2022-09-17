import React from 'react';
import Search from '../UI/Search';
import Button from '../UI/Controls/Button';
import classes from './Header.module.scss';

const Header = () => {
  return (
    <header className={classes.header}>
      <Search />
      <div className={classes.btn}>
        <Button>
          <span style={{ fontSize: '30px' }} className="icon-like"></span>
        </Button>
      </div>
      <div className={classes.btn}>
        <Button>
          <span style={{ fontSize: '30px' }} className="icon-fav"></span>
        </Button>
      </div>
      <div className={classes.btn}>
        <Button>
          <span style={{ fontSize: '30px' }} className="icon-dislike"></span>
        </Button>
      </div>

    </header>
  );
};

export default Header;
