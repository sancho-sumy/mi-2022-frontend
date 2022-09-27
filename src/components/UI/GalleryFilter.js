import React, { useState } from 'react';
import clsx from 'clsx';

import Select from './Controls/Select';
import Button from './Controls/Button';

import options from '../../assets/options';
import classes from './GalleryFilter.module.scss';

function GalleryFilter({ breedsList, setGalleryReloadStatus, setGalleryQueryParams }) {
  const [order, setOrder] = useState(options.galleryRequest.order);
  const [breedId, setBreedId] = useState(options.galleryRequest.breed_ids);
  const [limit, setLimit] = useState(options.galleryRequest.limit);
  const [type, setType] = useState(options.galleryRequest.mime_types);

  const onReloadPressed = () => {
    setGalleryReloadStatus(true);
  };

  const filterHandler = (value, optionId) => {
    if (optionId === 'breedId') {
      options.galleryRequest.breed_ids = value;
      setBreedId(value);
    } else if (optionId === 'limit') {
      options.galleryRequest.limit = value;
      setLimit(value);
    } else if (optionId === 'order') {
      options.galleryRequest.order = value;
      setOrder(value);
    } else if (optionId === 'type') {
      options.galleryRequest.mime_types = value;
      setType(value);
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
        <Select filterHandler={filterHandler} optionId={'order'} value={order}>
          {orderItemsList}
        </Select>
      </div>
      <div>
        <h4>Type</h4>
        <Select filterHandler={filterHandler} optionId={'type'} value={type}>
          {typeItemsList}
        </Select>
      </div>
      <div>
        <h4>Breed</h4>
        <Select filterHandler={filterHandler} optionId={'breedId'} value={breedId}>
          {breedsItemsList}
        </Select>
      </div>
      <div>
        <h4>Limit</h4>
        <div className={clsx(classes.double)}>
          <Select filterHandler={filterHandler} optionId={'limit'} value={limit}>
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
