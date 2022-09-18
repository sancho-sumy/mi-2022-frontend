import React from 'react';
import clsx from 'clsx';
import Button from '../UI/Controls/Button';
import classes from './PageHeader.module.scss';

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

const ViewSettingsBlock = () => {
  return (
    <div className={classes['view-settings-block']}>
      <div className={clsx(classes.btn, classes.btn_list)}>
        <Button design="gray"></Button>
      </div>
      <div className={clsx(classes.btn, classes.btn_list2)}>
        <Button design="gray"></Button>
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

const PageHeader = ({ activeItem }) => {
  return (
    <div className={classes['page-header']}>
      <nav className={classes['navigation-block']}>
        <div className={clsx(classes.btn, classes.btn_prev)}>
          <Button design="light">
            <span style={{ fontSize: '20px' }} className="icon-back"></span>
          </Button>
        </div>
        <LabelElement label={activeItem} design={'sectionName'} />
        {activeItem === 'voting' && <LabelElement label={'28'} design={'breedId'} />}
      </nav>
      {activeItem === 'gallery' && <UploadBlock />}
      {activeItem === 'breeds' && <ViewSettingsBlock />}
    </div>
  );
};

export default PageHeader;
