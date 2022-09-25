import React from 'react';
import bgPicture from './girl-and-pet.png';
import classes from './Home.module.scss';

const Home = () => {
  console.log("Hi! Nice to see you. I hope you won't see any errors here ;-)");
  return (
    <div className={classes.home}>
      <img src={bgPicture} alt="Woman with cat" />
    </div>
  );
};

export default Home;
