import React, { useEffect, useState } from 'react';
import ImageList from '../UI/ImageList';
import PageLayout from '../Layout/PageLayout';

import thecatapi from '../../apis/thecatapi';

const Gallery = ({ activeItem }) => {
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
      <img
        src={item.url}
        alt={item.breeds.length ? item.breeds[0].description : "Cat's image"}
        key={item.id}
      />
    );
  });

  return (
    <PageLayout activeItem={activeItem}>
      <ImageList imagesList={imagesList} />
    </PageLayout>
  );
};

export default Gallery;
