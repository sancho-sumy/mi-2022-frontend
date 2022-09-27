import React from 'react';

import ImageFrame from '../UI/ImageFrame';
import VotingPanel from '../UI/VotingPanel';
import LogWrapper from '../UI/Log/LogWrapper';
import LogItem from '../UI/Log/LogItem';
import MessageItem from '../UI/MessageItem';
import Loader from '../UI/Loader';

const Voting = ({ currentImage, actionLog, favouritesList, votingButtonHandler, loading }) => {
  const votingButtonsHandler = (itemId) => {
    votingButtonHandler(itemId, currentImage.id);
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
    <React.Fragment>
      <ImageFrame>
        {loading && <Loader />}
        {!loading && (
          <img
            src={currentImage.url}
            alt={currentImage.breeds?.length ? currentImage.breeds[0]?.description : "Cat's image"}
            key={currentImage.id}
          />
        )}
        <VotingPanel
          onVotingButtonClick={votingButtonsHandler}
          favouriteImage={favouritesList.find((item) => item.image_id === currentImage.id)}
        />
      </ImageFrame>
      <LogWrapper>
        {!actionLog.length && <MessageItem>No item found</MessageItem>}
        {logList.slice(0, 4)}
      </LogWrapper>
    </React.Fragment>
  );
};

export default Voting;
