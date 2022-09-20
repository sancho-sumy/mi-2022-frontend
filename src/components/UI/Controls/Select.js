import React from 'react';
import clsx from 'clsx';

import classes from './Select.module.scss';

const Select = () => {
  return (
    <div className={clsx(classes.selector)}>
      <select>
        <option value="au">All breeds</option>
        <option value="ca">Canada</option>
        <option value="usa">USA</option>
      </select>
    </div>
  );
};

export default Select;
