import React from 'react';

import GalleryItem from './GalleryItem';
import GalleryWrapper from './GalleryWrapper';
import MessageItem from './MessageItem';

const GalleryList = ({
  currentItem,
  imagesList,
  openBreedInfoHandler,
  votingButtonHandler,
  favouritesList,
}) => {
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
            src={item?.url}
            alt={item.breeds?.length ? `Cat of ${item.breeds[0]?.name} breed` : 'Unknown breed'}
            key={item?.id}
            imageId={item?.id}
            btnId={'favourite'}
            btnText={
              !!favouritesList.find((favItem) => favItem.image_id === item?.id) ? (
                <span style={{ fontSize: '20px' }} className="icon-fav-filled"></span>
              ) : (
                <span style={{ fontSize: '20px' }} className="icon-fav"></span>
              )
            }
            onButtonClick={votingButtonHandler}
          />
        );
      });
    } else if (currentItem === 'breeds' || currentItem === 'search') {
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
    } else if (currentItem === 'likes') {
      list = imagesList
        .filter((item) => item.value)
        .map((item) => {
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
    } else if (currentItem === 'dislikes') {
      list = imagesList
        .filter((item) => !item.value)
        .map((item) => {
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
    //No item found message if image list is empty
    <React.Fragment>
      {(!imagesList.length ||
        (currentItem === 'likes' && !!!imageItems().filter((item) => item.props.value).length) ||
        (currentItem === 'dislikes' &&
          !!!imageItems().filter((item) => !item.props.value).length)) && (
        <MessageItem>No items found</MessageItem>
      )}
      <GalleryWrapper imagesList={imageItems()} />
    </React.Fragment>
  );
};

export default GalleryList;
