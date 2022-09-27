import React from 'react';
import clsx from 'clsx';

import Button from '../UI/Controls/Button';
import Select from '../UI/Controls/Select';

import sectionsList from '../../assets/sectionsList';
import options from '../../assets/options';
import classes from './PageHeader.module.scss';

const onClickTemp = () => {
  console.log("Oops, that button doesn't seem to be working yet!");
};

// const UploadBlock = () => {
//   return (
//     <div className={clsx(classes.btn, classes.btn_upload)}>
//       <Button onButtonClick={onClickTemp} design="light" btnId={'upload'}>
//         <span style={{ fontSize: '16px' }} className="icon-upload"></span>
//         <span style={{ marginLeft: '10px' }}>Upload</span>
//       </Button>
//     </div>
//   );
// };

const ViewSettingsBlock = ({ breedsList, setBreedsQueryParams }) => {
  const filterHandler = (value, optionId) => {
    if (optionId === 'breedId') {
      options.breedsRequest.breed_ids = value;
    } else if (optionId === 'limit') {
      options.breedsRequest.limit = value;
    } else if (optionId === 'order') {
      options.breedsRequest.order = value;
    }
    setBreedsQueryParams(options.breedsRequest);
  };

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
        {item.nameShort}
      </option>
    );
  });
  return (
    <div className={classes['view-settings-block']}>
      <div className={clsx(classes.btn, classes.btn_list)}>
        <Select
          filterHandler={filterHandler}
          optionId={'breedId'}
          value={options.breedsRequest.breed_ids}
        >
          {breedsItemsList}
        </Select>
      </div>
      <div className={clsx(classes.btn, classes.btn_list)}>
        <Select
          filterHandler={filterHandler}
          optionId={'limit'}
          value={options.breedsRequest.limit}
        >
          {limitItemsList}
        </Select>
      </div>
      <div className={clsx(classes.btn, classes.btn_sort)}>
        <Button onButtonClick={filterHandler} btnId={'desc'} optionId={'order'} design="gray">
          <span style={{ fontSize: '20px' }} className="icon-sort"></span>
        </Button>
      </div>
      <div className={clsx(classes.btn, classes.btn_sort)}>
        <Button onButtonClick={filterHandler} btnId={'asc'} optionId={'order'} design="gray">
          <span style={{ fontSize: '20px' }} className="icon-sort-reverse"></span>
        </Button>
      </div>
    </div>
  );
};

//! Temporary! Label elements should be refactored!

const LabelElement = ({ label, design, currentItem, setCurrentItem }) => {
  const buttonClickHandler = (btnId) => {
    if (currentItem !== 'breedsInfo') {
      return;
    }
    setCurrentItem(btnId);
  };

  const SectionNameLabel = () => {
    return (
      <div className={clsx(classes.btn, classes.btn_label)}>
        {currentItem === 'breedsInfo' && (
          <Button
            onButtonClick={buttonClickHandler}
            isDisabled={false}
            design={'light'}
            btnId={'breeds'}
          >
            <span style={{ fontSize: '20px' }}>{label}</span>
          </Button>
        )}
        {currentItem !== 'breedsInfo' && (
          <Button onButtonClick={buttonClickHandler} isDisabled={true} design={'dark'}>
            <span style={{ fontSize: '20px' }}>{label}</span>
          </Button>
        )}
      </div>
    );
  };

  const BreedIdLabel = () => {
    return (
      <div className={clsx(classes.btn, classes['btn_label-breed-id'])}>
        <Button isDisabled={true} design="dark">
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

const PageHeader = ({
  currentItem,
  breedsList,
  currentBreed,
  setActiveItem,
  setBreedsQueryParams,
}) => {
  const activeItemHandler = (btnId) => {
    setActiveItem(btnId);
  };

  const breedsQueryParamsHandler = (query) => {
    setBreedsQueryParams(query);
  };

  return (
    <div className={classes['page-header']}>
      <nav className={classes['navigation-block']}>
        <div className={clsx(classes.btn, classes.btn_prev)}>
          <Button onButtonClick={onClickTemp} design="light" btnId="backward">
            <span style={{ fontSize: '20px' }} className="icon-back"></span>
          </Button>
        </div>
        <LabelElement
          label={sectionsList.filter((item) => item.name === currentItem)[0]?.label_en}
          design={'sectionName'}
          currentItem={currentItem}
          setCurrentItem={activeItemHandler}
        />
        {currentItem === 'breedsInfo' && (
          <LabelElement
            label={breedsList.filter((item) => item.id === currentBreed)[0]?.name}
            design={'breedId'}
          />
        )}
      </nav>
      {/* {currentItem === 'gallery' && <UploadBlock />} */}
      {currentItem === 'breeds' && (
        <ViewSettingsBlock
          breedsList={breedsList}
          setBreedsQueryParams={breedsQueryParamsHandler}
        />
      )}
    </div>
  );
};

export default PageHeader;
