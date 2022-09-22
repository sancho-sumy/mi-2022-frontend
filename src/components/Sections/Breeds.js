import React from 'react';
import PageLayout from '../Layout/PageLayout';
import ImageList from '../UI/ImageList';

import ImageItem from '../UI/ImageItem';

const limitItems = [
  {
    name: 'Limit: 5',
    value: 5,
  },
  {
    name: 'Limit: 10',
    value: 10,
  },
  {
    name: 'Limit: 15',
    value: 15,
  },
  {
    name: 'Limit: 20',
    value: 20,
  },
];

const Breeds = (props) => {

  const openBreedInfoHandler = (item) => {
    props.openBreedInfoHandler(item)
  }

  const imagesList = props.breedsImages.map((item) => {
    return (
      <ImageItem
        src={item.url}
        alt={item.breeds.length ? item.breeds[0].description : "Cat's image"}
        key={item.id}
        currentItem={props.currentItem}
        btnText={item.breeds.length ? item.breeds[0].name : 'Unknown breed'}
        breedId={item.breeds.length ? item.breeds[0].id : null}
        openBreedInfo={openBreedInfoHandler}
      />
    );
  });

  return (
    <PageLayout currentItem={props.currentItem} limitItems={limitItems} breedsList={props.breedsList}>
      <ImageList imagesList={imagesList} currentItem={props.currentItem} />
    </PageLayout>
  );
};

export default Breeds;
