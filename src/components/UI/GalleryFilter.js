import React from 'react';
import clsx from 'clsx';

import Select from './Controls/Select';
import Button from './Controls/Button';

import options from '../../assets/options';
import classes from './GalleryFilter.module.scss';

function GalleryFilter({ breedsList, setReloadStatus }) {
  const onReloadPressed = () => {
    setReloadStatus(true);
  };

  const orderItemsList = options.order.map((item) => {
    return (
      <option key={item.value} value={item.value}>
        {item.name}
      </option>
    );
  });

  const typeItemsList = options.type.map((item) => {
    return (
      <option key={item.value} value={item.value}>
        {item.name}
      </option>
    );
  });

  const breedsItemsList = breedsList.map((item) => {
    return (
      <option key={item.id} value={item.value}>
        {item.name}
      </option>
    );
  });

  const limitItemsList = options.limits.map((item) => {
    return (
      <option key={item.value} value={item.value}>
        {item.nameFull}
      </option>
    );
  });

  return (
    <div className={clsx(classes['gallery-filter'])}>
      <div>
        <h4>Order</h4>
        <Select>{orderItemsList}</Select>
      </div>
      <div>
        <h4>Type</h4>
        <Select>{typeItemsList}</Select>
      </div>
      <div>
        <h4>Breed</h4>
        <Select>{breedsItemsList}</Select>
      </div>
      <div>
        <h4>Limit</h4>
        <div className={clsx(classes.double)}>
          <Select>{limitItemsList}</Select>
          <div onClick={onReloadPressed}>
            <Button>
              <span
                style={{ fontSize: '20px', letterSpacing: '0' }}
                className={'icon-update'}
              ></span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GalleryFilter;
