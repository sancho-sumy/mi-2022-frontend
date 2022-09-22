import React from 'react';
import classes from './MenuItem.module.scss';
import Button from '../Controls/Button';

const MenuItem = ({ btnText, image, background, link, currentItem, activeItem }) => {
  const onButtonClick = () => {
    activeItem(btnText);
  };

  const isActive = currentItem === btnText ? 'active' : '';

  return (
    <div className={classes['menu-item']}>
      <div className={`${classes.card} ${classes.breeds}`} style={{ background: `${background}` }}>
        <img className={classes['card-img']} src={image} alt="Breeds" />
      </div>
      <div onClick={onButtonClick} className={classes.btn}>
        <Button link={link} isActive={isActive}>
          {btnText}
        </Button>
      </div>
    </div>
  );
};

export default MenuItem;
