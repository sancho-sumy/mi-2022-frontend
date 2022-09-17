import React from 'react';
import clsx from 'clsx';
import Button from '../UI/Controls/Button';
import classes from './PageHeader.module.scss';

const UploadBlock = () => {
  return (
    <div className={clsx(classes.btn, classes.btn_upload)}>
      <Button type="light">
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
        <Button type="gray"></Button>
      </div>
      <div className={clsx(classes.btn, classes.btn_list2)}>
        <Button type="gray"></Button>
      </div>
      <div className={clsx(classes.btn, classes.btn_sort)}>
        <Button type="gray">
          <span style={{ fontSize: '20px' }} className="icon-sort"></span>
        </Button>
      </div>
      <div className={clsx(classes.btn, classes.btn_sort)}>
        <Button type="gray">
          <span style={{ fontSize: '20px' }} className="icon-sort-revert"></span>
        </Button>
      </div>
    </div>
  );
};

const PageHeader = ({ activeItem }) => {
  return (
    <div className={classes['page-header']}>
      <nav className={classes['navigation-block']}>
        <div className={clsx(classes.btn, classes.btn_prev)}>
          <Button type="light">
            <span style={{ fontSize: '20px' }} className="icon-back"></span>
          </Button>
        </div>
        <div className={clsx(classes.btn, classes.btn_label)}>
          <Button type="dark" option="mute">
            <span style={{ fontSize: '20px' }}>{activeItem}</span>
          </Button>
        </div>
      </nav>
      {activeItem === 'gallery' && <UploadBlock />}
      {activeItem === 'breeds' && <ViewSettingsBlock />}
    </div>
  );
};

export default PageHeader;
