import React from 'react';
import Menu from '../UI/Menu/Menu';
import classes from './LeftSection.module.css';
import Logo from './logo.png';

const LeftSection = () => {
  return (
    <div className={classes['left-section']}>
      <nav>
        <div>
          <img className={classes.logo} src={Logo} alt="Logo" />
        </div>
        <h1>Hi intern!</h1>
        <p>Welcome to MI 2022 Front-end test</p>
        <h3>Lets start using The Cat API</h3>
        <Menu className={classes.menu} />
      </nav>
    </div>
  );
};

export default LeftSection;
