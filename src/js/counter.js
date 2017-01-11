import React from 'react';

const Counter = ({clearBoard, generation}) => {
  return (
    <div className='counter'>
      <input name='generation' type='text' value={generation} />
      <button className='clear' onClick={() => clearBoard()}>
        CLEAR
      </button>
    </div>
  );
};

Counter.propTypes = {
  clearBoard: React.PropTypes.func.isRequired,
  generation: React.PropTypes.number
};

export default Counter;
