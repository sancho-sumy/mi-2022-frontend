import React, { useEffect, useState } from 'react';
import ImageList from '../UI/ImageList';
import PageLayout from '../Layout/PageLayout';
import ImageItem from '../UI/ImageItem';

import thecatapi from '../../apis/thecatapi';
import GalleryFilter from '../UI/GalleryFilter';

const Gallery = ({ currentItem }) => {
  const [queryResult, setQueryResult] = useState([]);

  useEffect(() => {
    const getImages = async () => {
      const { data } = await thecatapi.get('/images/search', {
        params: {
          limit: 15,
        },
      });
      setQueryResult(data);
      console.log(data);
    };
    getImages();
  }, []);

  const imagesList = queryResult.map((item) => {
    return (
      <ImageItem
        src={item.url}
        alt={item.breeds.length ? item.breeds[0].description : "Cat's image"}
        key={item.id}
        currentItem={currentItem}
        btnText={<span style={{ fontSize: '20px', letterSpacing: '0'}} className="icon-fav"></span>}
        breedId={item.breeds.length ? item.breeds[0].id : null}
      />
    );
  });

  return (
    <PageLayout currentItem={currentItem}>
      <GalleryFilter />
      <ImageList imagesList={imagesList} />
    </PageLayout>
  );
};

export default Gallery;
