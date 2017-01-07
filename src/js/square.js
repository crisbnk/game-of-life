import React from 'react';

export default class Square extends React.Component {
  render() {
    return (
      <button className='square' onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    );
  }
}

Square.propTypes = {
  value: React.PropTypes.number.isRequired,
  onClick: React.PropTypes.func.isRequired
};
