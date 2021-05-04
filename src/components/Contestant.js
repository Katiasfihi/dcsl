import React, { useEffect } from 'react';
import { useStopwatch } from '../customHooks';
import './Contestant.scss'

const Contestant = ({ name, isRunning }) => {
  const { laps, addLap, elapsedTime, startTimer, stopTimer } = useStopwatch();

  useEffect(() => {
    isRunning ? startTimer() : stopTimer();
  }, [isRunning]);

  const totalTime = laps.reduce((acc, cur) => acc + cur, 0);
  const totalMinutes = Math.floor(totalTime / 60);
  const totalSeconds = totalTime - totalMinutes * 60;

  const averageTime = totalTime / laps.length || 0;
  const averageMinutes = Math.floor(averageTime / 60);
  const averageSeconds = averageTime - averageMinutes * 60;

  const lastTime = laps[laps.length - 1] || 0;
  const lastMinutes = Math.floor(lastTime / 60);
  const lastSeconds = lastTime - lastMinutes * 60;

  console.log(elapsedTime);

  return (
    <div className='contestants'>
      <div className='contestants__element' onClick={() => addLap()}>
        <p className='contestants__name'>{name}</p>
      </div>
      <div className='contestants__element'>
        <p>{laps.length}</p>
      </div>
      <div className='contestants__element'>
        <p>{`${totalMinutes}:${totalSeconds.toFixed(2)}`}</p>
      </div>
      <div className='contestants__element'>
        <p>{`${averageMinutes}:${averageSeconds.toFixed(2)}`}</p>
      </div>
      <div className='contestants__element'>
        <p>{`${lastMinutes}:${lastSeconds.toFixed(2)}`}</p>
      </div>
    </div>
  );
};

export default Contestant;