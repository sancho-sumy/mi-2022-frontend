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
import Lists from './components/Sections/Lists';

import './App.scss';
import thecatapi from './apis/thecatapi';
import options from './assets/options';

function App() {
  const [currentItem, setCurrentItem] = useState('home');
  const [currentBreed, setCurrentBreed] = useState('beng');
  const [queryParams, setQueryParams] = useState(options.defaultRequest);
  const [breedsQueryResult, setBreedsQueryResult] = useState([]);
  const [galleryQueryResult, setGalleryQueryResult] = useState([]);
  const [breedsList, setBreedsList] = useState([]);
  const [favouritesList, setFavouritesList] = useState([]);
  const [votesList, setVotesList] = useState([]);
  const [actionLog, setActionLog] = useState([]);
  const [favouriteLastUpdate, setFavouriteLastUpdate] = useState({});
  const [votesLastUpdate, setVotesLastUpdate] = useState({});
  const [reloadStatus, setReloadStatus] = useState(false);
  //! To fix buttons!
  //! Fix - do not open details when breed is unknown

  console.log(reloadStatus);

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
  }, [favouriteLastUpdate]);

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
          {currentItem === 'voting' && (
            <Voting
              currentItem={currentItem}
              actionLog={actionLog}
              setActionLog={setActionLog}
              favouritesList={favouritesList}
              votesList={votesList}
              setFavouriteLastUpdate={setFavouriteLastUpdate}
              setVotesLastUpdate={setVotesLastUpdate}
              setFavouritesList={setFavouritesList}
            />
          )}
          {currentItem === 'breeds' && (
            <Breeds
              setCurrentItem={setCurrentItem}
              setCurrentBreed={setCurrentBreed}
              currentItem={currentItem}
              imagesQueryResult={breedsQueryResult}
              breedsList={breedsList}
              setReloadStatus={setReloadStatus}
            />
          )}
          {currentItem === 'gallery' && (
            <Gallery
              currentItem={currentItem}
              breedsList={breedsList}
              imagesQueryResult={galleryQueryResult}
              reloadStatus={reloadStatus}
              setReloadStatus={setReloadStatus}
            />
          )}
          {(currentItem === 'favourites' ||
            currentItem === 'likes' ||
            currentItem === 'dislikes') && (
            <Lists
              currentItem={currentItem}
              favouritesList={favouritesList}
              votesList={votesList}
              setFavouritesList={setFavouritesList}
              setVotesList={setVotesList}
            />
          )}
          {currentItem === 'breedsInfo' && (
            <BreedsInfo
              currentItem={currentItem}
              currentBreed={currentBreed}
              breedsList={breedsList}
            />
          )}
        </RightSection>
      </div>
    </main>
  );
}

export default App;
