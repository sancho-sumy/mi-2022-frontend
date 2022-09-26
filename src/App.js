import React, { useEffect, useState } from 'react';

import LeftSection from './components/Layout/LeftSection';
import Menu from './components/UI/Menu/Menu';
import RightSection from './components/Layout/RightSection';
import Home from './components/Sections/Home';
import Voting from './components/Sections/Voting';
import Breeds from './components/Sections/Breeds';
import Gallery from './components/Sections/Gallery';
import Welcome from './components/Sections/Welcome';
import BreedsInfo from './components/Sections/BreedsInfo';
import GalleryList from './components/UI/GalleryList';

import './App.scss';
import thecatapi from './apis/thecatapi';
import options from './assets/options';
import PageLayout from './components/Layout/PageLayout';

function App() {
  const [currentItem, setCurrentItem] = useState('home');
  const [currentBreed, setCurrentBreed] = useState('beng');
  const [currentImage, setCurrentImage] = useState([]);
  const [imageLastLoad, setImageLastLoad] = useState({});
  const [queryParams, setQueryParams] = useState(options.defaultRequest);
  const [breedsQueryResult, setBreedsQueryResult] = useState([]);
  const [galleryQueryResult, setGalleryQueryResult] = useState([]);
  const [breedsList, setBreedsList] = useState([]);
  const [favouritesList, setFavouritesList] = useState([]);
  const [votesList, setVotesList] = useState([]);
  const [actionLog, setActionLog] = useState([]);
  const [favouritesLastUpdate, setFavouritesLastUpdate] = useState({});
  const [votesLastUpdate, setVotesLastUpdate] = useState({});
  const [reloadStatus, setReloadStatus] = useState(false);
  //! To fix buttons!
  //! Fix - do not open details when breed is unknown

  useEffect(() => {
    const getBreedsList = async () => {
      const { data } = await thecatapi.get('/breeds');
      setBreedsList(data);
    };
    getBreedsList();
  }, []);

  useEffect(() => {
    if ((currentItem !== 'breeds' || currentItem !== 'gallery') && !reloadStatus) {
      return;
    }
    const getImages = async () => {
      const { data } = await thecatapi.get('/images/search', {
        params: queryParams,
      });
      currentItem === 'breeds' && setBreedsQueryResult(data);
      currentItem === 'gallery' && setGalleryQueryResult(data);
      setReloadStatus(false);
    };
    getImages();
  }, [reloadStatus, queryParams, currentItem]);

  // Favourites and votes lists are loading during first app load and will be updated after adding of new element. It's made in order to have a fresh list to check if element already in the list before adding it.

  useEffect(() => {
    const getVotes = async () => {
      const { data } = await thecatapi.get('/votes');
      setVotesList(data);
    };
    getVotes();
  }, [votesLastUpdate]);

  useEffect(() => {
    const getFavourites = async () => {
      const { data } = await thecatapi.get('/favourites');
      setFavouritesList(data);
    };
    getFavourites();
  }, [favouritesLastUpdate]);

  useEffect(() => {
    const getImage = async () => {
      const { data } = await thecatapi.get('/images/search');
      setCurrentImage(data[0]);
    };
    getImage();
  }, [imageLastLoad]);

  //  Voting algorithm:
  //  Favourites: when the button pressed => check if the image is already in Favourites => if true add to Favourites / if false remove from Favourites => don't load new picture.
  //  Like/Dislike: when the button pressed => check if the image is already in Votes => if true add to Votes / if false don't add to Votes (API doesn't have possibility to prevent repeats) => load a new image

  //! Add debounce for button pressing

  //! Add message if picture already voted
  const votingButtonHandler = async (buttonId, imageId) => {
    let action = '';
    if (buttonId === 'favourite') {
      if (!favouritesList.find((item) => item.image_id === imageId)) {
        await thecatapi.post('/favourites', {
          image_id: imageId,
        });
        action = 'add';
      } else {
        await thecatapi.delete(
          `/favourites/${favouritesList.find((item) => item.image_id === imageId).id}`
        );
        setFavouritesList(favouritesList.filter((item) => item.image_id !== imageId));
        action = 'remove';
      }
      setFavouritesLastUpdate(new Date());
    } else {
      if (!votesList.find((item) => item.image_id === imageId)) {
        await thecatapi.post('/votes', {
          image_id: imageId,
          value: buttonId === 'like' ? 1 : 0,
        });
        action = 'add';
      } else {
        await thecatapi.delete(`/votes/${votesList.find((item) => item.image_id === imageId).id}`);
        setFavouritesList(votesList.filter((item) => item.image_id !== imageId));
        action = 'remove';
      }
      setVotesLastUpdate(new Date());
    }
    // Add a new record to log.
    const newLog = [...actionLog];
    newLog.push({
      imageId: imageId,
      action: action,
      section: buttonId === 'favourite' ? 'favourite' : buttonId === 'like' ? 'like' : 'dislike',
      time: new Date(),
    });
    setActionLog(newLog);
    // Trigger to load new image.
    buttonId !== 'favourite' && setImageLastLoad(new Date());
  };

  const imagesList = () => {
    if (currentItem === 'likes' || currentItem === 'dislikes') {
      return votesList;
    } else if (currentItem === 'favourites') {
      return favouritesList;
    } else if (currentItem === 'gallery') {
      return galleryQueryResult;
    } else if (currentItem === 'breeds') {
      return breedsQueryResult;
    }
  };
  return (
    <main className="container">
      <div className="wrapper">
        <LeftSection>
          <Welcome />
          <Menu currentItem={currentItem} activeItem={setCurrentItem} />
        </LeftSection>
        <RightSection
          currentItem={currentItem}
          setActiveItem={setCurrentItem}
          currentBreed={currentBreed}
        >
          {currentItem === 'home' && <Home />}
          {currentItem !== 'home' && (
            <PageLayout
              currentItem={currentItem}
              currentBreed={currentBreed}
              breedsList={breedsList}
              setActiveItem={setCurrentItem}
            >
              {currentItem === 'voting' && (
                <Voting
                  currentImage={currentImage}
                  actionLog={actionLog}
                  favouritesList={favouritesList}
                  votesList={votesList}
                  votingButtonHandler={votingButtonHandler}
                />
              )}
              {currentItem === 'breeds' && (
                <Breeds
                  setCurrentItem={setCurrentItem}
                  setCurrentBreed={setCurrentBreed}
                  currentItem={currentItem}
                  imagesList={imagesList()}
                  breedsList={breedsList}
                  setReloadStatus={setReloadStatus}
                />
              )}
              {currentItem === 'gallery' && (
                <Gallery
                  currentItem={currentItem}
                  breedsList={breedsList}
                  imagesList={imagesList()}
                  reloadStatus={reloadStatus}
                  setReloadStatus={setReloadStatus}
                  votingButtonHandler={votingButtonHandler}
                  setCurrentImage={setCurrentImage}
                  setImageLastLoad={setImageLastLoad}
                  favouritesList={favouritesList}
                />
              )}
              {(currentItem === 'favourites' ||
                currentItem === 'likes' ||
                currentItem === 'dislikes') && (
                <GalleryList
                  imagesList={imagesList()}
                  currentItem={currentItem}
                  favouritesList={favouritesList}
                  votesList={votesList}
                  setFavouritesList={setFavouritesList}
                  setVotesList={setVotesList}
                  votingButtonHandler={votingButtonHandler}
                />
              )}
              {currentItem === 'breedsInfo' && (
                <BreedsInfo
                  currentItem={currentItem}
                  currentBreed={currentBreed}
                  breedsList={breedsList}
                />
              )}
            </PageLayout>
          )}
        </RightSection>
      </div>
    </main>
  );
}

export default App;
