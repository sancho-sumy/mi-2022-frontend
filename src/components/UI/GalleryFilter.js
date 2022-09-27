import React, { useState } from 'react';
import clsx from 'clsx';

import Select from './Controls/Select';
import Button from './Controls/Button';

import options from '../../assets/options';
import classes from './GalleryFilter.module.scss';

function GalleryFilter({ breedsList, setGalleryReloadStatus, setGalleryQueryParams }) {
  const [order, setOrder] = useState('');
  const [breedId, setBreedId] = useState('');
  const [limit, setLimit] = useState('');
  const [type, setType] = useState('');

  const onReloadPressed = () => {
    setGalleryReloadStatus(true);
  };

  const filterHandler = (value, optionId) => {
    if (optionId === 'breedId') {
      options.galleryRequest.breed_ids = value;
      setBreedId(value)
    } else if (optionId === 'limit') {
      options.galleryRequest.limit = value;
      setLimit(value)
    } else if (optionId === 'order') {
      options.galleryRequest.order = value;
      setOrder(value)
    } else if (optionId === 'type') {
      options.galleryRequest.mime_types = value;
      setType(value)
    }
    setGalleryQueryParams(options.galleryRequest);
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

  const breedsItemsList = [...options.breeds, ...breedsList].map((item) => {
    return (
      <option key={Math.random()} value={item.id}>
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
        <Select
          filterHandler={filterHandler}
          optionId={'order'}
          value={options.galleryRequest.order}
        >
          {orderItemsList}
        </Select>
      </div>
      <div>
        <h4>Type</h4>
        <Select filterHandler={filterHandler} optionId={'type'} value={options.galleryRequest.mime_types}>
          {typeItemsList}
        </Select>
      </div>
      <div>
        <h4>Breed</h4>
        <Select
          filterHandler={filterHandler}
          optionId={'breedId'}
          value={options.galleryRequest.breed_ids}
        >
          {breedsItemsList}
        </Select>
      </div>
      <div>
        <h4>Limit</h4>
        <div className={clsx(classes.double)}>
          <Select
            filterHandler={filterHandler}
            optionId={'limit'}
            value={options.galleryRequest.limit}
          >
            {limitItemsList}
          </Select>
          <div onClick={onReloadPressed}>
            <Button onButtonClick={onReloadPressed} btnId={'reload'} design="white">
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
