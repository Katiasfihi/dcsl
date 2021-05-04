import React from 'react';
import { useStopwatch } from '../customHooks';

import './Footer.scss'

const Footer = ({
  handleSubmit,
  handleChange,
  competitorName,
  startRace,
  stopRace,
}) => {
  const { elapsedTime, startTimer, stopTimer } = useStopwatch();

  console.log(startRace, stopRace);
  const totalTime = elapsedTime;
  const totalMinutes = Math.floor(totalTime / 60);
  const totalSeconds = totalTime - totalMinutes * 60;
  const handleStartRace = () => {
    startRace();
    startTimer();
  };
  const handleStopRace = () => {
    stopRace();
    stopTimer();
  };

  return (
    <footer className='footer'>
      <form onSubmit={handleSubmit}>
        <label htmlFor="add-name">1km Timer</label>
        <input type='text' onChange={handleChange} value={competitorName} id='add-name'/>
        <input type='submit' value='Add Name' className='footer__button footer__button--add-name' />
      </form>
      <div className='footer__race-control'>
        <button
          onClick={handleStartRace}
          className='footer__button footer__button--start'
        >
          Start Race
        </button>
        <button
          onClick={handleStopRace}
          className='footer__button footer__button--stop'
        >
          Stop Race
        </button>
        <p className='footer__timer'>{`${totalMinutes}:${totalSeconds.toFixed(
          2
        )}`}</p>
      </div>
    </footer>
  );
};

export default Footer;