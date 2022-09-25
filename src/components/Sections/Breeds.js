import React, { useEffect } from 'react';
import PageLayout from '../Layout/PageLayout';
import ImageList from '../UI/ImageList';
import ImageItem from '../UI/ImageItem';

const Breeds = (props) => {
  useEffect(() => {
    !props.imagesQueryResult.length && props.setReloadStatus(true);
  });

  const openBreedInfoHandler = (item) => {
    props.setCurrentBreed(item);
    props.setCurrentItem('breedsInfo');
  };

  const imagesList = props.imagesQueryResult.map((item) => {
    return (
      <ImageItem
        src={item.url}
        alt={item.breeds.length ? item.breeds[0].description : "Cat's image"}
        key={item.id}
        currentItem={props.currentItem}
        btnText={item.breeds.length ? item.breeds[0].name : 'Unknown breed'}
        id={item.breeds.length ? item.breeds[0].id : null}
        onButtonClick={openBreedInfoHandler}
      />
    );
  });

  return (
    <PageLayout currentItem={props.currentItem} breedsList={props.breedsList}>
      <ImageList imagesList={imagesList} currentItem={props.currentItem} />
    </PageLayout>
  );
};

export default Breeds;
