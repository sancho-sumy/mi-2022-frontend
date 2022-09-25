import React from 'react';

import GalleryItem from './GalleryItem';
import GalleryWrapper from './GalleryWrapper';

const GalleryList = ({ currentItem, imagesList, openBreedInfoHandler, votingButtonHandler }) => {
  const deleteItemHandler = (btnId, itemId) => {
    let imageId = imagesList.filter((item) => item.id === itemId)[0];
    votingButtonHandler(btnId, imageId.image_id);
  };

  const imageItems = () => {
    let list = [];
    if (currentItem === 'gallery') {
      list = imagesList.map((item) => {
        return (
          <GalleryItem
            src={item.url}
            alt={item.breeds?.length ? `Cat of ${item.breeds[0]?.name} breed` : 'Unknown breed'}
            key={item.id}
            imageId={item.id}
            btnId={'favourite'}
            btnText={<span style={{ fontSize: '20px' }} className="icon-fav"></span>}
            onButtonClick={votingButtonHandler}
          />
        );
      });
    } else if (currentItem === 'breeds') {
      list = imagesList.map((item) => {
        return (
          <GalleryItem
            src={item.url}
            alt={item.breeds?.length ? `Cat of ${item.breeds[0]?.name} breed` : 'Unknown breed'}
            key={item.id}
            currentItem={currentItem}
            btnText={item.breeds?.length ? item.breeds[0]?.name : 'Unknown breed'}
            btnId={item.breeds?.length ? item.breeds[0]?.id : null}
            onButtonClick={openBreedInfoHandler}
          />
        );
      });
    } else if (currentItem === 'favourites') {
      list = imagesList.map((item) => {
        return (
          <GalleryItem
            src={item.image?.url}
            alt={'Favourites image'}
            key={item.id}
            imageId={item.id}
            btnId={'favourite'}
            btnText={<span style={{ fontSize: '20px' }} className="icon-trash"></span>}
            onButtonClick={deleteItemHandler}
          />
        );
      });
    } else if (currentItem === 'likes' || currentItem === 'dislikes') {
      list = imagesList.map((item) => {
        return (
          <GalleryItem
            src={item.image?.url}
            alt={'Votes image'}
            key={item.id}
            imageId={item.id}
            btnId={currentItem === 'likes' ? 'like' : 'dislike'}
            btnText={<span style={{ fontSize: '20px' }} className="icon-trash"></span>}
            onButtonClick={deleteItemHandler}
            value={item.value}
          />
        );
      });
    }
    return list;
  };

  return (
    <React.Fragment>
      {(currentItem === 'breeds' || currentItem === 'gallery' || currentItem === 'favourites') && (
        <GalleryWrapper imagesList={imageItems()} />
      )}
      {(currentItem === 'likes' || currentItem === 'dislikes') && (
        <GalleryWrapper
          imagesList={
            currentItem === 'likes'
              ? imageItems().filter((item) => item.props.value)
              : imageItems().filter((item) => !item.props.value)
          }
        />
      )}
    </React.Fragment>
  );
};

export default GalleryList;
