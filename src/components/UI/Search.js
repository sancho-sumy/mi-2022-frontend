import React from 'react';
import Button from './Controls/Button';
import classes from './Search.module.scss';

const Search = () => {
  return (
    <div className={classes.search}>
      <input
        className={classes['search-field']}
        type="text"
        placeholder="Search for breeds by name"
      />
      <span>
        <div className={classes.btn}>
          <Button design="light">
            <span style={{ fontSize: '20px' }} className="icon-search"></span>
          </Button>
        </div>
      </span>
    </div>
  );
};

export default Search;
