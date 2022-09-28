import React, { useState, useEffect } from 'react';
import Button from './Controls/Button';
import classes from './Search.module.scss';

const Search = ({ currentItem, onSearchSubmit }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (currentItem !== 'search') {
      setQuery('');
    }
  }, [currentItem]);

  const buttonClickHandler = () => {
    onSearchSubmit(query);
  };

  const changeHandler = (event) => {
    setQuery(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    onSearchSubmit(query);
  };

  return (
    <form className={classes.search} onSubmit={submitHandler}>
      <input
        className={classes['search-field']}
        type="text"
        placeholder="Search for breeds by name"
        onChange={changeHandler}
        value={query}
      />
      <span>
        <div className={classes.btn}>
          <Button onButtonClick={buttonClickHandler} design="light">
            <span style={{ fontSize: '20px' }} className="icon-search"></span>
          </Button>
        </div>
      </span>
    </form>
  );
};

export default Search;
