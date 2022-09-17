import React from 'react';
import PageHeader from '../Layout/PageHeader';
import classes from './Voting.module.css';

const Voting = ({activeItem}) => {
  return (
    <div className={classes.voting}>
      <PageHeader activeItem={activeItem}/>
    </div>
  );
};

export default Voting;
