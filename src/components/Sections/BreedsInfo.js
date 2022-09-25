import React, { useEffect, useState } from 'react';
import clsx from 'clsx';

import ImageFrame from '../UI/ImageFrame';
import GalleryNavigation from '../UI/Controls/GalleryNavigation';

import classes from './BreedsInfo.module.scss';
import thecatapi from '../../apis/thecatapi';

const BreedsInfo = ({ currentBreed }) => {
  const [queryResult, setQueryResult] = useState([]);
  const [currentImage, setCurrentImage] = useState([]);

  useEffect(() => {
    const getImages = async () => {
      const { data } = await thecatapi.get('/images/search', {
        params: {
          breed_id: currentBreed,
          limit: 8,
        },
      });
      setQueryResult(data);
      setCurrentImage(data[0].url);
    };
    getImages();
  }, [currentBreed]);

  const onItemChange = (index) => {
    setCurrentImage(queryResult[index].url);
  };
  return (
    <React.Fragment>
      <ImageFrame>
        <img src={currentImage} alt={'Breed example'} />
        <GalleryNavigation
          queryResult={queryResult}
          onItemChange={onItemChange}
        ></GalleryNavigation>
      </ImageFrame>
      <div className={clsx(classes['breeds-info'])}>
        <h2>{queryResult[0]?.breeds[0]?.name}</h2>
        <p>{queryResult[0]?.breeds[0]?.description}</p>
        <div className={clsx(classes.table)}>
          <div>
            <span>Temperament:</span> {queryResult[0]?.breeds[0]?.temperament}
          </div>
          <div>
            <span>Origin:</span> {queryResult[0]?.breeds[0]?.origin}
          </div>
          <div>
            <span>Weight:</span> {queryResult[0]?.breeds[0]?.weight.metric} kgs
          </div>
          <div>
            <span>Life span:</span> {queryResult[0]?.breeds[0]?.life_span} years
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default BreedsInfo;
