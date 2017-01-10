import React from 'react';

const Timer = ({clearBoard, generation, startTimer, stopTimer}) => {
  return (
    <div>
      <button className='start' onClick={() => startTimer()}>
        START
      </button>
      <button className='start' onClick={() => stopTimer()}>
        STOP
      </button>
      <button className='start' onClick={() => clearBoard()}>
        CLEAR
      </button>
      <input name='generation' type='text' value={generation} />
    </div>
  );
};

Timer.propTypes = {
  clearBoard: React.PropTypes.func.isRequired,
  generation: React.PropTypes.number,
  startTimer: React.PropTypes.func.isRequired,
  stopTimer: React.PropTypes.func.isRequired
};

export default Timer;
