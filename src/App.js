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
  const [breedsQueryParams, setBreedsQueryParams] = useState(options.defaultRequest);
  const [breedsQueryResult, setBreedsQueryResult] = useState([]);
  const [breedsReloadStatus, setBreedsReloadStatus] = useState(true);
  const [galleryQueryParams, setGalleryQueryParams] = useState(options.defaultRequest);
  const [galleryQueryResult, setGalleryQueryResult] = useState([]);
  const [galleryReloadStatus, setGalleryReloadStatus] = useState(true);
  const [breedsList, setBreedsList] = useState([]);
  const [favouritesList, setFavouritesList] = useState([]);
  const [votesList, setVotesList] = useState([]);
  const [actionLog, setActionLog] = useState([]);
  const [favouritesLastUpdate, setFavouritesLastUpdate] = useState({});
  const [votesLastUpdate, setVotesLastUpdate] = useState({});
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getBreedsList = async () => {
      const { data } = await thecatapi.get('/breeds');
      setBreedsList(data);
    };
    getBreedsList();
  }, []);

  useEffect(() => {
    if ((currentItem !== 'breeds' || currentItem !== 'gallery') && !breedsReloadStatus) {
      return;
    }
    const getImages = async () => {
      setLoading(true)
      const { data } = await thecatapi.get('/images/search', {
        params: breedsQueryParams,
      });
      setBreedsQueryResult(data);
      setBreedsReloadStatus(false);
      setLoading(false)
    };
    getImages();
  }, [breedsReloadStatus, breedsQueryParams, currentItem]);

  useEffect(() => {
    if ((currentItem !== 'breeds' || currentItem !== 'gallery') && !galleryReloadStatus) {
      return;
    }
    const getImages = async () => {
      setLoading(true)
      const { data } = await thecatapi.get('/images/search', {
        params: galleryQueryParams,
      });
      setGalleryQueryResult(data);
      setGalleryReloadStatus(false);
      setLoading(false)
    };
    getImages();
  }, [galleryReloadStatus, galleryQueryParams, currentItem]);

  // Favourites and votes lists are loading during first app load and will be updated after adding of new element. It's made in order to have a fresh list to check if element already in the list before adding it.

  useEffect(() => {
    setLoading(true)
    const getVotes = async () => {
      const { data } = await thecatapi.get('/votes');
      setVotesList(data);
      setLoading(false)
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

  //! Refactor loading images for voting. Load a big set at once.

  useEffect(() => {
    setLoading(true)
    const getImage = async () => {
      const { data } = await thecatapi.get('/images/search');
      setCurrentImage(data[0]);
      setLoading(false)
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
        setLoading(true)
        await thecatapi.post('/votes', {
          image_id: imageId,
          value: buttonId === 'like' ? 1 : 0,
        });
        action = 'add';
        setLoading(true)
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
    // Trigger to load new image. Only after like/dislike pressing.
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
              setBreedsQueryParams={setBreedsQueryParams}
              setGalleryReloadStatus={setGalleryReloadStatus}
              setBreedsReloadStatus={setBreedsReloadStatus}
            >
              {currentItem === 'voting' && (
                <Voting
                  currentImage={currentImage}
                  actionLog={actionLog}
                  favouritesList={favouritesList}
                  votesList={votesList}
                  votingButtonHandler={votingButtonHandler}
                  loading={loading}
                />
              )}
              {currentItem === 'breeds' && (
                <Breeds
                  setCurrentItem={setCurrentItem}
                  setCurrentBreed={setCurrentBreed}
                  currentItem={currentItem}
                  imagesList={imagesList()}
                  breedsList={breedsList}
                  setBreedsReloadStatus={setBreedsReloadStatus}
                  loading={loading}
                />
              )}
              {currentItem === 'gallery' && (
                <Gallery
                  currentItem={currentItem}
                  setGalleryQueryParams={setGalleryQueryParams}
                  breedsList={breedsList}
                  imagesList={imagesList()}
                  setGalleryReloadStatus={setGalleryReloadStatus}
                  votingButtonHandler={votingButtonHandler}
                  favouritesList={favouritesList}
                  loading={loading}
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
