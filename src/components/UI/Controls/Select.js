import React from 'react';
import clsx from 'clsx';

import classes from './Select.module.scss';

const Select = (props) => {
  const handleChange = (e) => {
    props.filterHandler(e.target.value, props.optionId);
  };

  return (
    <div className={clsx(classes.selector)}>
      <select onChange={handleChange} value={props.value}>{props.children}</select>
    </div>
  );
};

export default Select;
