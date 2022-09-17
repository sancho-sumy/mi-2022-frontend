import './App.css';
import LeftSection from './components/sections/LeftSection';
import RightSection from './components/sections/RightSection';

function App() {
  return (
    <main className='container'>
      <div className='wrapper'>
        <LeftSection />
        <RightSection />
      </div>
    </main>
  );
}

export default App;
