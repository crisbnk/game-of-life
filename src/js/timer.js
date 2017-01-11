import React from 'react';

const Timer = ({startTimer, stopTimer}) => {
  return (
    <div className='timer'>
      <button className='start' onClick={() => startTimer()}>
        START
      </button>
      <button className='stop' onClick={() => stopTimer()}>
        STOP
      </button>
    </div>
  );
};

Timer.propTypes = {
  startTimer: React.PropTypes.func.isRequired,
  stopTimer: React.PropTypes.func.isRequired
};

export default Timer;
