import React, { useEffect } from 'react';
import ImageList from '../UI/ImageList';
import PageLayout from '../Layout/PageLayout';
import ImageItem from '../UI/ImageItem';
import GalleryFilter from '../UI/GalleryFilter';

const Gallery = (props) => {
  useEffect(() => {
    !props.imagesQueryResult.length && props.setReloadStatus(true);
  });

  const onReloadPressed = () => {
    props.setReloadStatus(true);
  };
  const imagesList = props.imagesQueryResult.map((item) => {
    return (
      <ImageItem
        src={item.url}
        alt={item.breeds.length ? item.breeds[0].description : "Cat's image"}
        key={item.id}
        currentItem={props.currentItem}
        btnText={
          <span style={{ fontSize: '20px', letterSpacing: '0' }} className="icon-fav"></span>
        }
        breedId={item.breeds.length ? item.breeds[0].id : null}
      />
    );
  });

  return (
    <PageLayout currentItem={props.currentItem}>
      <GalleryFilter breedsList={props.breedsList} setReloadStatus={onReloadPressed} />
      <ImageList imagesList={imagesList} />
    </PageLayout>
  );
};

export default Gallery;
