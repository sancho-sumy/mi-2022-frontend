import React from 'react';
import classes from './MenuItem.module.css';
import Button from '../Controls/Button';

const MenuItem = ({ name, image, background, link, activeItem }) => {
  const onButtonClick = () => {
    activeItem(name)
  }
  
  return (
    <div className={classes['menu-item']}>
      <div className={`${classes.card} ${classes.breeds}`} style={{ background: `${background}` }}>
        <img className={classes['card-img']} src={image} alt="Breeds" />
      </div>
      <div onClick={onButtonClick} className={classes.btn}>
        <Button link={link}>{name}</Button>
      </div>
    </div>
  );
};

export default MenuItem;
