import React, { useState } from 'react';
import clsx from 'clsx';
import Button from '../UI/Controls/Button';
import classes from './PageHeader.module.scss';
import Select from '../UI/Controls/Select';

const UploadBlock = () => {
  return (
    <div className={clsx(classes.btn, classes.btn_upload)}>
      <Button design="light">
        <span style={{ fontSize: '16px' }} className="icon-upload"></span>
        <span style={{ marginLeft: '10px' }}>Upload</span>
      </Button>
    </div>
  );
};

const ViewSettingsBlock = ({ breedsItems, limitItems }) => {
  const [currentBreed, setCurrentBreed] = useState('2');

  const onBreedsSelection = () => {
    setCurrentBreed('selectedItem');
  };
  console.log(currentBreed);

  const breedsItemsList = breedsItems.map((item) => {
    return (
      <option onChange={() => onBreedsSelection('selectedItem')} key={item.id} value={item.value}>
        {item.name}
      </option>
    );
  });

  const limitItemsList = limitItems.map((item) => {
    return (
      <option key={item.name} value={item.value}>
        {item.name}
      </option>
    );
  });
  return (
    <div className={classes['view-settings-block']}>
      <div className={clsx(classes.btn, classes.btn_list)}>
        <Select>{breedsItemsList}</Select>
      </div>
      <div className={clsx(classes.btn, classes.btn_list)}>
        <Select>{limitItemsList}</Select>{' '}
      </div>
      <div className={clsx(classes.btn, classes.btn_sort)}>
        <Button design="gray">
          <span style={{ fontSize: '20px' }} className="icon-sort"></span>
        </Button>
      </div>
      <div className={clsx(classes.btn, classes.btn_sort)}>
        <Button design="gray">
          <span style={{ fontSize: '20px' }} className="icon-sort-revert"></span>
        </Button>
      </div>
    </div>
  );
};

//! Temporary! Label elements should be refactored!

const LabelElement = ({ label, design }) => {
  const SectionNameLabel = () => {
    return (
      <div className={clsx(classes.btn, classes.btn_label)}>
        <Button design="dark" option="mute">
          <span style={{ fontSize: '20px' }}>{label}</span>
        </Button>
      </div>
    );
  };

  const BreedIdLabel = () => {
    return (
      <div className={clsx(classes.btn, classes['btn_label-breed-id'])}>
        <Button design="dark" option="mute">
          <span style={{ fontSize: '20px' }}>{label}</span>
        </Button>
      </div>
    );
  };

  return (
    <div>
      {design === 'sectionName' && <SectionNameLabel />}
      {design === 'breedId' && <BreedIdLabel />}
    </div>
  );
};

const PageHeader = ({ currentItem, breedsItems, limitItems }) => {
  return (
    <div className={classes['page-header']}>
      <nav className={classes['navigation-block']}>
        <div className={clsx(classes.btn, classes.btn_prev)}>
          <Button design="light">
            <span style={{ fontSize: '20px' }} className="icon-back"></span>
          </Button>
        </div>
        <LabelElement label={currentItem} design={'sectionName'} />
        {currentItem === 'voting' && <LabelElement label={'28'} design={'breedId'} />}
      </nav>
      {currentItem === 'gallery' && <UploadBlock />}
      {currentItem === 'breeds' && (
        <ViewSettingsBlock limitItems={limitItems} breedsItems={breedsItems} />
      )}
    </div>
  );
};

export default PageHeader;
