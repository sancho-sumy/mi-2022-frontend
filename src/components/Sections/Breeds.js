import React, { useEffect, useState } from 'react';
import PageLayout from '../Layout/PageLayout';
import ImageList from '../UI/ImageList';

import thecatapi from '../../apis/thecatapi';

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

const Breeds = ({ currentItem }) => {
  const [queryResult, setQueryResult] = useState([]);
  const [breedsItems, setBreedsItems] = useState([])

  useEffect(() => {
    const getBreedsList = async () => {
      const { data } = await thecatapi.get('/breeds');
      setBreedsItems(data);
    };
    getBreedsList();
  }, []);

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
    <PageLayout currentItem={currentItem} limitItems={limitItems} breedsItems={breedsItems}>
      <ImageList imagesList={imagesList} />
    </PageLayout>
  );
};

export default Breeds;
