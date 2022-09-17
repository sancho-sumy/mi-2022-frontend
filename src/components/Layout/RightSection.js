import React from 'react';
import Home from '../Sections/Home';
import Voting from '../Sections/Voting';
import Breeds from '../Sections/Breeds';
import Gallery from '../Sections/Gallery';
import Header from '../Layout/Header';
import classes from './RightSection.module.css';

const RightSection = ({ activeItem }) => {
  return (
    <div className={classes['right-section']}>
      <section className={classes.wrapper}>
        {activeItem === 'home' && <Home />}
        {activeItem !== 'home' && <Header />}
        {activeItem === 'voting' && <Voting activeItem={activeItem} />}
        {activeItem === 'breeds' && <Breeds activeItem={activeItem} />}
        {activeItem === 'gallery' && <Gallery activeItem={activeItem} />}
      </section>
    </div>
  );
};

export default RightSection;
