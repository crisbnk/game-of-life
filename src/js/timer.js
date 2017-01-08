import React from 'react';

const Timer = ({startTimer, stopTimer}) => {
  return (
    <div>
      <button className='start' onClick={() => startTimer()}>
        START
      </button>
      <button className='start' onClick={() => stopTimer()}>
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
