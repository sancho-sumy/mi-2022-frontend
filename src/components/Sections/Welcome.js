import React from 'react';

import classes from './Welcome.module.scss';
import Logo from './logo.png';

const Welcome = () => {
  return (
    <React.Fragment>
      <div>
        <img className={classes.logo} src={Logo} alt="Logo" />
      </div>
      <h1>Hi intern!</h1>
      <p>Welcome to MI 2022 Front-end test</p>
      <h3>Lets start using The Cat API</h3>
    </React.Fragment>
  );
};

export default Welcome;
