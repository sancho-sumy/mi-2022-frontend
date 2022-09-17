import React, { useState } from 'react';
import './App.css';
import LeftSection from './components/Layout/LeftSection';
import RightSection from './components/Layout/RightSection';

function App() {
  const [activeItem, setActiveItem] = useState('home');

  const activeItemHandler = (item) => {
    setActiveItem(item);
  };

  return (
    <main className="container">
      <div className="wrapper">
        <LeftSection activeItem={activeItemHandler} />
        <RightSection activeItem={activeItem} />
      </div>
    </main>
  );
}

export default App;
