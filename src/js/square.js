import React from 'react';

const Square = ({value, onClick}) => {
  return (
    <button className='square' onClick={() => onClick()}>
      {value}
    </button>
  );
};

Square.propTypes = {
  value: React.PropTypes.number.isRequired,
  onClick: React.PropTypes.func.isRequired
};

export default Square;
