import React from 'react';

const Timer = ({clearBoard, startTimer, stopTimer}) => {
  return (
    <div className='timer'>
      <label htmlFor='buttons'><i>Controls</i></label>
      <div id='buttons'>
        <button className='start' onClick={() => startTimer()}>
          START
        </button>
        <button className='stop' onClick={() => stopTimer()}>
          STOP
        </button>
        <button className='clear' onClick={() => clearBoard()}>
          CLEAR
        </button>
      </div>
    </div>
  );
};

Timer.propTypes = {
  clearBoard: React.PropTypes.func.isRequired,
  startTimer: React.PropTypes.func.isRequired,
  stopTimer: React.PropTypes.func.isRequired
};

export default Timer;
