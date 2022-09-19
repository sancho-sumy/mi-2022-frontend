import React from 'react';
import clsx from 'clsx';

import classes from './VotingPanel.module.scss';

const VotingPanel = () => {
  return (
    <div className={clsx(classes['voting-panel'])}>
      <span class="icon-like"></span>
      <span class="icon-fav"></span>
      <span class="icon-dislike"></span>
    </div>
  );
};

export default VotingPanel;
