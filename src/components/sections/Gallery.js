import React from 'react';
import PageHeader from '../Layout/PageHeader';
import classes from './Gallery.module.css';

const Gallery = ({ activeItem }) => {
  return (
    <div className={classes.gallery}>
      <PageHeader activeItem={activeItem} />
    </div>
  );
};

export default Gallery;
