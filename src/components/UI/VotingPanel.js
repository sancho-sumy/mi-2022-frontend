import React from 'react';
import clsx from 'clsx';

import classes from './VotingPanel.module.scss';

const VotingPanel = ({ onVotingButtonClick }) => {
  return (
    <div className={clsx(classes['voting-panel'])}>
      <span className="icon-like" onClick={() => onVotingButtonClick('like')}></span>
      <span className="icon-fav" onClick={() => onVotingButtonClick('favourite')}></span>
      <span className="icon-dislike" onClick={() => onVotingButtonClick('dislike')}></span>
    </div>
  );
};

export default VotingPanel;
