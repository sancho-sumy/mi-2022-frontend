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

function App() {
  const [currentItem, setCurrentItem] = useState('home');
  const [currentBreed, setCurrentBreed] = useState('beng');
  const [breedsImages, setBreedsImages] = useState([]);
  const [breedsList, setBreedsList] = useState([]);

  useEffect(() => {
    const getBreedsList = async () => {
      const { data } = await thecatapi.get('/breeds');
      setBreedsList(data);
    };
    getBreedsList();
  }, []);

  useEffect(() => {
    const getImages = async () => {
      const { data } = await thecatapi.get('/images/search', {
        params: {
          breed_ids: currentBreed,
          limit: 15,
          order: 'Desc',
        },
      });
      setBreedsImages(data);
    };
    getImages();
  }, [currentBreed]);

  const activeItemHandler = (item) => {
    setCurrentItem(item);
  };

  const openBreedInfoHandler = (item) => {
    setCurrentBreed(item);
    setCurrentItem('breedsInfo');
  };

  return (
    <main className="container">
      <div className="wrapper">
        <LeftSection>
          <Welcome />
          <Menu currentItem={currentItem} activeItem={activeItemHandler} />
        </LeftSection>
        <RightSection
          currentItem={currentItem}
          activeItem={activeItemHandler}
          currentBreed={currentBreed}
        >
          {currentItem === 'home' && <Home />}
          {currentItem === 'voting' && <Voting currentItem={currentItem} />}
          {currentItem === 'breeds' && (
            <Breeds
              currentItem={currentItem}
              openBreedInfoHandler={openBreedInfoHandler}
              breedsImages={breedsImages}
              breedsList={breedsList}
            />
          )}
          {currentItem === 'gallery' && <Gallery currentItem={currentItem} />}
          {currentItem === 'favourites' && <Lists currentItem={currentItem} />}
          {currentItem === 'likes' && <Lists currentItem={currentItem} />}
          {currentItem === 'dislikes' && <Lists currentItem={currentItem} />}
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
