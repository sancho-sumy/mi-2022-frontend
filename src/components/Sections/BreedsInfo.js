import React, { useEffect, useState } from 'react';
import clsx from 'clsx';

import PageLayout from '../Layout/PageLayout';
import ImageFrame from '../UI/ImageFrame';
import GalleryNavigation from '../UI/Controls/GalleryNavigation';

import classes from './BreedsInfo.module.scss';
import thecatapi from '../../apis/thecatapi';

const BreedsInfo = ({ currentItem }) => {
  const [queryResult, setQueryResult] = useState([]);
  const [currentImage, setCurrentImage] = useState([]);

  useEffect(() => {
    const getImages = async () => {
      const { data } = await thecatapi.get('/images/search', {
        params: {
          breed_id: 'beng',
          limit: 8,
        },
      });
      setQueryResult(data);
      setCurrentImage(data[0].url);
    };
    getImages();
  }, []);

  const onItemChange = (index) => {
    setCurrentImage(queryResult[index].url);
  };

  return (
    <PageLayout currentItem={currentItem}>
      <ImageFrame>
        <img src={currentImage} alt={'Breed example'} />
        <GalleryNavigation
          queryResult={queryResult}
          onItemChange={onItemChange}
        ></GalleryNavigation>
      </ImageFrame>
      <div className={clsx(classes['breeds-info'])}>
        <h2>Basenji</h2>
        <p>Family companion cat</p>
        <div className={clsx(classes.table)}>
          <div><span>Temperament:</span> Active, Energetic, Independent, Intelligent, Gentle</div>
          <div><span>Origin:</span> United States</div>
          <div><span>Weight</span>: 3 - 5 kgs</div>
          <div><span>Life span:</span> 14 - 15 years</div>
        </div>
      </div>
    </PageLayout>
  );
};

export default BreedsInfo;
