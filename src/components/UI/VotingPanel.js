import React from 'react';
import clsx from 'clsx';

import classes from './VotingPanel.module.scss';

const VotingPanel = () => {
  return (
    <div className={clsx(classes['voting-panel'])}>
      <span className="icon-like"></span>
      <span className="icon-fav"></span>
      <span className="icon-dislike"></span>
    </div>
  );
};

export default VotingPanel;
