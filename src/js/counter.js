import React from 'react';

const Counter = ({generation}) => {
  return (
    <div className='counter'>
      <input
        className='generation'
        name='generation'
        type='text'
        value={generation}
      />
    </div>
  );
};

Counter.propTypes = {
  generation: React.PropTypes.number
};

export default Counter;
