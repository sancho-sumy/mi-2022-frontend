import React from 'react';
import clsx from 'clsx';

import classes from './Select.module.scss';

const Select = (props) => {
  return (
    <div className={clsx(classes.selector)}>
      <select>{props.children}</select>
    </div>
  );
};

export default Select;
