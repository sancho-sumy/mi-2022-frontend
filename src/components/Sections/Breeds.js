import React from 'react';
import GalleryList from '../UI/GalleryList';
import Loader from '../UI/Loader';

const Breeds = (props) => {
  const openBreedInfoHandler = (item) => {
    if (item) {
      props.setCurrentBreed(item);
      props.setCurrentItem('breedsInfo');
    }
  };

  return (
    <React.Fragment>
      {props.loading && <Loader />}
      {!props.loading && (
        <GalleryList
          imagesList={props.imagesList}
          currentItem={props.currentItem}
          openBreedInfoHandler={openBreedInfoHandler}
        />
      )}
    </React.Fragment>
  );
};

export default Breeds;
