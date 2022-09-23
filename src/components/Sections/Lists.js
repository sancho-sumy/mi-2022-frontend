import React, { useEffect, useState } from 'react';

import PageLayout from '../Layout/PageLayout';
import ImageItem from '../UI/ImageItem';
import ImageList from '../UI/ImageList';

import thecatapi from '../../apis/thecatapi';

const Favourites = (props) => {
  const [imageList, setImageList] = useState([]);

  useEffect(() => {
    if (props.currentItem === 'favourites') {
      const getFavourites = async () => {
        const { data } = await thecatapi.get('/favourites');
        setImageList(data);
      };
      getFavourites();
    } else {
      const getFavourites = async () => {
        const { data } = await thecatapi.get('/votes');
        setImageList(data);
      };
      getFavourites();
    }
  }, [props.currentItem]);

  const deleteFromFavourites = async (favId) => {
    await thecatapi.delete(`/favourites/${favId}`);
    setImageList(imageList.filter((item) => item.id !== favId));
  };

  const deleteFromVotes = async (voteId) => {
    await thecatapi.delete(`/votes/${voteId}`);
    setImageList(imageList.filter((item) => item.id !== voteId));
  };

  console.log(imageList);

  const imagesList = imageList.map((item) => {
    return (
      <ImageItem
        src={item.image.url}
        alt={"Favourite cat's image"}
        key={item.id}
        id={item.id}
        btnText={<span style={{ fontSize: '20px' }} className="icon-trash"></span>}
        onButtonClick={props.currentItem === 'favourites' ? deleteFromFavourites : deleteFromVotes}
      />
    );
  });

  return (
    <PageLayout currentItem={props.currentItem}>
      <ImageList imagesList={imagesList} currentItem={props.currentItem} />
    </PageLayout>
  );
};

export default Favourites;
