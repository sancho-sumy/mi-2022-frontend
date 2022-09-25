import React from 'react';
import clsx from 'clsx';

import classes from './Select.module.scss';

const Select = (props) => {
  
  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className={clsx(classes.selector)}>
      <select onChange={handleChange}>{props.children}</select>
    </div>
  );
};

export default Select;
