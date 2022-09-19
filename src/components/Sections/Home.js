import React from 'react';
import bgPicture from './girl-and-pet.png';
import classes from './Home.module.scss';

const Home = () => {
  return (
    <div className={classes.home}>
      <img src={bgPicture} alt="Woman with cat" />
    </div>
  );
};

export default Home;
