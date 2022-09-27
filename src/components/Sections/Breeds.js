import React, { useEffect } from 'react';
import GalleryList from '../UI/GalleryList';

const Breeds = (props) => {
  useEffect(() => {
    !props.imagesList.length && props.setBreedsReloadStatus(true);
  });

  const openBreedInfoHandler = (item) => {
    if (item) {
      props.setCurrentBreed(item);
      props.setCurrentItem('breedsInfo');
    }
  };

  return (
    <React.Fragment>
      <GalleryList
        imagesList={props.imagesList}
        currentItem={props.currentItem}
        openBreedInfoHandler={openBreedInfoHandler}
      />
    </React.Fragment>
  );
};

export default Breeds;
