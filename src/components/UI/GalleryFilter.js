import React from 'react';
import clsx from 'clsx';

import Select from './Controls/Select';

import classes from './GalleryFilter.module.scss';
import Button from './Controls/Button';

function GalleryFilter() {
  return (
    <div className={clsx(classes['gallery-filter'])}>
      <div>
        <h4>Order</h4>
        <Select />
      </div>
      <div>
        <h4>Type</h4>
        <Select />
      </div>
      <div>
        <h4>Breed</h4>
        <Select />
      </div>
      <div>
        <h4>Limit</h4>
        <div className={clsx(classes.double)}>
          <Select />
          <Button><span style={{ fontSize: '20px', letterSpacing: '0' }} className={'icon-update'}></span></Button>
        </div>
      </div>
    </div>
  );
}

export default GalleryFilter;
