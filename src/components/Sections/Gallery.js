import React from 'react';
import GalleryList from '../UI/GalleryList';
import GalleryFilter from '../UI/GalleryFilter';
import Loader from '../UI/Loader';

const Gallery = (props) => {
  const onReloadPressed = () => {
    props.setGalleryReloadStatus(true);
  };

  const votingButtonHandler = (btnId, itemId) => {
    let imageId = props.imagesList.filter((item) => item.id === itemId)[0];
    props.votingButtonHandler(btnId, imageId.id);
  };

  return (
    <React.Fragment>
      <GalleryFilter
        breedsList={props.breedsList}
        setGalleryReloadStatus={onReloadPressed}
        setGalleryQueryParams={props.setGalleryQueryParams}
      />
      {props.loading && <Loader/>}
      {!props.loading && <GalleryList
        imagesList={props.imagesList}
        currentItem={props.currentItem}
        votingButtonHandler={votingButtonHandler}
        favouritesList={props.favouritesList}
      />}
    </React.Fragment>
  );
};

export default Gallery;
