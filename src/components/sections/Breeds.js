import React from 'react';
import PageHeader from '../Layout/PageHeader';
import classes from './Breeds.module.css';

const Breeds = ({ activeItem }) => {
  return (
    <div className={classes.breeds}>
      <PageHeader activeItem={activeItem} />
    </div>
  );
};

export default Breeds;
