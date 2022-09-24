import React from 'react';

import PageLayout from '../Layout/PageLayout';
import ImageItem from '../UI/ImageItem';
import ImageList from '../UI/ImageList';

import thecatapi from '../../apis/thecatapi';

const Favourites = ({
  currentItem,
  favouritesList,
  votesList,
  setVotesList,
  setFavouritesList,
}) => {
  
  // useEffect(() => {
  //   if (props.currentItem === 'favourites') {
  //     const getFavourites = async () => {
  //       const { data } = await thecatapi.get('/favourites');
  //       setImageList(data);
  //     };
  //     getFavourites();
  //   } else {
  //     const getFavourites = async () => {
  //       const { data } = await thecatapi.get('/votes');
  //       setImageList(data);
  //     };
  //     getFavourites();
  //   }
  // }, [props.currentItem]);

  const deleteFromFavourites = async (favId) => {
    await thecatapi.delete(`/favourites/${favId}`);
    setFavouritesList(favouritesList.filter((item) => item.id !== favId));
  };

  const deleteFromVotes = async (voteId) => {
    await thecatapi.delete(`/votes/${voteId}`);
    setVotesList(votesList.filter((item) => item.id !== voteId));
  };

  const favouritesItems = favouritesList.map((item) => {
    return (
      <ImageItem
        src={item.image.url}
        alt={"Favourite cat's image"}
        key={item.id}
        id={item.id}
        btnText={<span style={{ fontSize: '20px' }} className="icon-trash"></span>}
        onButtonClick={currentItem === 'favourites' ? deleteFromFavourites : deleteFromVotes}
      />
    );
  });

  const votesItems = votesList.map((item) => {
    return (
      <ImageItem
        src={item.image.url}
        alt={"Favourite cat's image"}
        key={item.id}
        id={item.id}
        btnText={<span style={{ fontSize: '20px' }} className="icon-trash"></span>}
        onButtonClick={currentItem === 'favourites' ? deleteFromFavourites : deleteFromVotes}
        value={item.value}
      />
    );
  });

  return (
    <PageLayout currentItem={currentItem}>
      {currentItem === 'favourites' && (
        <ImageList imagesList={favouritesItems} currentItem={currentItem} />
      )}
      {currentItem !== 'favourites' && (
        <ImageList
          imagesList={
            currentItem === 'likes'
              ? votesItems.filter((item) => item.props.value)
              : votesItems.filter((item) => !item.props.value)
          }
          currentItem={currentItem}
        />
      )}
    </PageLayout>
  );
};

export default Favourites;
