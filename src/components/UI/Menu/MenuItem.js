import React from 'react';
import classes from './MenuItem.module.css';
import Button from '../Controls/Button';

const MenuItem = ({ name, image, background, link }) => {
  return (
    <div className={classes['menu-item']}>
      <div className={`${classes.card} ${classes.breeds}`} style={{ background: `${background}` }}>
        <img className={classes['card-img']} src={image} alt="Breeds" />
      </div>
      <div className={classes.btn}>
        <Button text={name} link={link} />
      </div>
    </div>
  );
};

export default MenuItem;
