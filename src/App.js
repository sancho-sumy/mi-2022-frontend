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

function App() {
  const [activeItem, setActiveItem] = useState('home');

  const activeItemHandler = (item) => {
    setActiveItem(item);
  };

  return (
    <main className="container">
      <div className="wrapper">
        <LeftSection>
          <Welcome />
          <Menu activeItem={activeItem} activeItemHandler={activeItemHandler} />
        </LeftSection>
        <RightSection activeItem={activeItem}>
          {activeItem === 'home' && <Home />}
          {activeItem === 'voting' && <Voting activeItem={activeItem} />}
          {activeItem === 'breeds' && <Breeds activeItem={activeItem} />}
          {activeItem === 'gallery' && <Gallery activeItem={activeItem} />}
        </RightSection>
      </div>
    </main>
  );
}

export default App;
