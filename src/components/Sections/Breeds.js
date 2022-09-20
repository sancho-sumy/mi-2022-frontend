import React, { useEffect, useState } from 'react';
import PageLayout from '../Layout/PageLayout';
import ImageList from '../UI/ImageList';

import thecatapi from '../../apis/thecatapi';

const Breeds = ({ currentItem }) => {
  const [queryResult, setQueryResult] = useState([]);

  useEffect(() => {
    const getImages = async () => {
      const { data } = await thecatapi.get('/images/search', {
        params: {
          limit: 10,
          page: 0,
          order: 'Asc',
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
    <PageLayout currentItem={currentItem}>
      <ImageList imagesList={imagesList} />
    </PageLayout>
  );
};

export default Breeds;
