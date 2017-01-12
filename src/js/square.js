import React from 'react';

const Square = ({value, onClick}) => {
  return (
    <button
      className={value === 0 ? 'square zero' : 'square one'}
      onClick={() => onClick()}
    />
  );
};

Square.propTypes = {
  value: React.PropTypes.number.isRequired,
  onClick: React.PropTypes.func.isRequired
};

export default Square;
