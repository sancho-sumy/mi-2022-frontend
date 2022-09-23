import React, { useEffect, useState } from 'react';
import PageLayout from '../Layout/PageLayout';

import thecatapi from '../../apis/thecatapi';
import ImageFrame from '../UI/ImageFrame';
import VotingPanel from '../UI/VotingPanel';
import LogWrapper from '../UI/Log/LogWrapper';

const Voting = ({ currentItem }) => {
  const [image, setImage] = useState([]);

  useEffect(() => {
    const getImage = async () => {
      const { data } = await thecatapi.get('/images/search');
      setImage(data[0]);
      console.log(data[0].id);
    };
    getImage();
  }, []);

  const votingButtonHandler = async (buttonId) => {
    if (buttonId === 'favourite') {
      await thecatapi.post('/favourites', {
        image_id: image.id,
      });
    } else {
      await thecatapi.post('/votes', {
        image_id: image.id,
        value: buttonId === 'like' ? 1 : 0,
      });
    }
  };

  return (
    <PageLayout currentItem={currentItem}>
      <ImageFrame>
        <img
          src={image.url}
          alt={image.breeds?.length ? image.breeds[0]?.description : "Cat's image"}
          key={image.id}
        />
        <VotingPanel onVotingButtonClick={votingButtonHandler} />
      </ImageFrame>
      <LogWrapper />
    </PageLayout>
  );
};

export default Voting;
