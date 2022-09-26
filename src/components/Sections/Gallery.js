import React, { useEffect } from 'react';
import GalleryList from '../UI/GalleryList';
import GalleryFilter from '../UI/GalleryFilter';

const Gallery = (props) => {
  useEffect(() => {
    !props.imagesList.length && props.setReloadStatus(true);
  });

  const onReloadPressed = () => {
    props.setReloadStatus(true);
  };

  const votingButtonHandler = (btnId, itemId) => {
    let imageId = props.imagesList.filter((item) => item.id === itemId)[0];
    props.votingButtonHandler(btnId, imageId.id);
  };

  return (
    <React.Fragment>
      <GalleryFilter breedsList={props.breedsList} setReloadStatus={onReloadPressed} />
      <GalleryList
        imagesList={props.imagesList}
        currentItem={props.currentItem}
        votingButtonHandler={votingButtonHandler}
        favouritesList={props.favouritesList}
      />
    </React.Fragment>
  );
};

export default Gallery;
