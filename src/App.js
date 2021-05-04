import { useState } from 'react';

import Contestant from './components/Contestant';
import Footer from './components/Footer';

import './App.scss';

function App() {
  const [competitorsList, setCompetitorsList] = useState([]);
  const [competitorName, setCompetitorName] = useState('');
  const [isRunning, setIsRunning] = useState(false);

  const handleChange = (event) => {
    setCompetitorName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setCompetitorsList([...competitorsList, competitorName]);
    setCompetitorName('');
  };

  const stopRace = () => {
    setIsRunning(false);
  };

  const startRace = () => {
    setIsRunning(true);
  };

  const headerContent = [
    'Name',
    'Lap Count',
    'Total Time',
    'Average Time',
    'Last Lap Time',
  ];

  return (
    <div className='App'>
      <header>
        <ul className='header-list'>
          {headerContent.map((section) => (
            <li className='header-item'>{section}</li>
          ))}
        </ul>
      </header>
      <ul className='contestants-list'>
        {competitorsList.map((competitor) => {
          return (
            <li className='contestants-item'>
              <Contestant name={competitor} isRunning={isRunning} />
            </li>
          );
        })}
      </ul>
      <Footer
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        competitorName={competitorName}
        startRace={startRace}
        stopRace={stopRace}
      />
    </div>
  );
}

export default App;