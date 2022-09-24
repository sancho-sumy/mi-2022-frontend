import React, { useEffect, useState } from 'react';
import PageLayout from '../Layout/PageLayout';

import thecatapi from '../../apis/thecatapi';
import ImageFrame from '../UI/ImageFrame';
import VotingPanel from '../UI/VotingPanel';
import LogWrapper from '../UI/Log/LogWrapper';
import LogItem from '../UI/Log/LogItem';
import MessageItem from '../UI/MessageItem';

const Voting = ({
  currentItem,
  actionLog,
  setActionLog,
  favouritesList,
  votesList,
  setVotesLastUpdate,
  setFavouriteLastUpdate,
  setFavouritesList,
}) => {
  const [image, setImage] = useState([]);
  const [imageLastLoad, setImageLastLoad] = useState({});
  const [favouriteImage, setFavouriteImage] = useState([]);
  const [votedImage, setVotedImage] = useState([]);

  useEffect(() => {
    const getImage = async () => {
      const { data } = await thecatapi.get('/images/search');
      setImage(data[0]);
      setFavouriteImage([]);
      setVotedImage([]);
    };
    getImage();
  }, [imageLastLoad]);

  useEffect(() => {
    const favoritesCheck = () => {
      setFavouriteImage(favouritesList.find((item) => item.image_id === image.id));
    };
    const votesCheck = () => {
      setVotedImage(votesList.find((item) => item.image_id === image.id));
    };
    favoritesCheck();
    votesCheck();
  }, [favouritesList, votesList, image.id]);

  //  Voting algorithm:
  //  Favourites: when the button pressed => check if the image is already in Favourites => if true add to Favourites / if false remove from Favourites => don't load new picture.
  //  Like/Dislike: when the button pressed => check if the image is already in Votes => if true add to Votes / if false don't add to Votes (API doesn't have possibility to prevent repeats) => load a new image

  //! Add debounce for button pressing

  //! Add message if picture already voted

  const votingButtonHandler = async (buttonId) => {
    let action = '';
    if (buttonId === 'favourite') {
      if (!favouriteImage) {
        await thecatapi.post('/favourites', {
          image_id: image.id,
        });
        action = 'add';
      } else {
        await thecatapi.delete(`/favourites/${favouriteImage.id}`);
        setFavouritesList(favouritesList.filter((item) => item.id !== favouriteImage.id));
        action = 'remove';
      }
      setFavouriteLastUpdate(new Date());
    } else {
      if (!votedImage) {
        await thecatapi.post('/votes', {
          image_id: image.id,
          value: buttonId === 'like' ? 1 : 0,
        });
        action = 'add';
        setVotesLastUpdate(new Date());
      } else {
        console.log('Already voted');
        return;
      }
    }
    const newLog = [...actionLog];
    newLog.push({
      imageId: image.id,
      action: action,
      section: buttonId === 'favourite' ? 'favourite' : buttonId === 'like' ? 'like' : 'dislike',
      time: new Date(),
    });
    setActionLog(newLog);
    buttonId !== 'favourite' && setImageLastLoad(new Date());
  };

  const logList = actionLog
    .map((item) => (
      <LogItem
        time={item.time.toTimeString().substring(0, 5)}
        imageId={item.imageId}
        action={item.action}
        section={`${item.section}s`}
        key={Math.random()}
      />
    ))
    .reverse();
  return (
    <PageLayout currentItem={currentItem}>
      <ImageFrame>
        <img
          src={image.url}
          alt={image.breeds?.length ? image.breeds[0]?.description : "Cat's image"}
          key={image.id}
        />
        <VotingPanel onVotingButtonClick={votingButtonHandler} favouriteImage={favouriteImage} />
      </ImageFrame>
      <LogWrapper>
        {!actionLog.length && <MessageItem>No item found</MessageItem>}
        {logList.slice(0, 4)}
      </LogWrapper>
    </PageLayout>
  );
};

export default Voting;
