import React, { useState } from 'react';
import './App.scss';
import LeftSection from './components/Layout/LeftSection';
import Menu from './components/UI/Menu/Menu';
import RightSection from './components/Layout/RightSection';
import Home from './components/Sections/Home';
import Voting from './components/Sections/Voting';
import Breeds from './components/Sections/Breeds';
import Gallery from './components/Sections/Gallery';
import Welcome from './components/Sections/Welcome';
import BreedsInfo from './components/Sections/BreedsInfo';
import Favourites from './components/Sections/Favourites';
import Likes from './components/Sections/Likes';
import Dislikes from './components/Sections/Dislikes';


function App() {
  const [currentItem, setCurrentItem] = useState('home');

  const activeItemHandler = (item) => {
    setCurrentItem(item);
  };

  return (
    <main className="container">
      <div className="wrapper">
        <LeftSection>
          <Welcome />
          <Menu currentItem={currentItem} activeItem={activeItemHandler} />
        </LeftSection>
        <RightSection currentItem={currentItem} activeItem={activeItemHandler}>
          {currentItem === 'home' && <Home />}
          {currentItem === 'voting' && <Voting currentItem={currentItem} />}
          {currentItem === 'breeds' && <Breeds currentItem={currentItem} />}
          {currentItem === 'gallery' && <Gallery currentItem={currentItem} />}
          {currentItem === 'breedsInfo' && <BreedsInfo currentItem={currentItem} />}
          {currentItem === 'favourites' && <Favourites currentItem={currentItem} />}
          {currentItem === 'likes' && <Likes currentItem={currentItem} />}
          {currentItem === 'dislikes' && <Dislikes currentItem={currentItem} />}
        </RightSection>
      </div>
    </main>
  );
}

export default App;
