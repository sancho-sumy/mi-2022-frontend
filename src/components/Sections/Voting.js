import React, { useEffect, useState } from 'react';
import PageLayout from '../Layout/PageLayout';

import thecatapi from '../../apis/thecatapi';
import ImageFrame from '../UI/ImageFrame';
import VotingPanel from '../UI/VotingPanel';
import LogWrapper from '../UI/Log/LogWrapper';

const Voting = ({ currentItem }) => {
  const [queryResult, setQueryResult] = useState([]);

  useEffect(() => {
    const getImages = async () => {
      const { data } = await thecatapi.get('/images/search');
      setQueryResult(data);
      console.log(data);
    };
    getImages();
  }, []);

  const imageForVoting = queryResult.map((item) => {
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
      <ImageFrame>
        {imageForVoting}
        <VotingPanel />
      </ImageFrame>
      <LogWrapper/>
    </PageLayout>
  );
};

export default Voting;
