import React from 'react';
import Square from './square.js';

export default class LifeTable extends React.Component {
  handleClick(i, j) {
    this.props.handleClick(i, j);
  }

  renderSquare(i, j) {
    return (
      <Square
        onClick={() => this.handleClick(i, j)}
        value={this.props.squares[i][j]}
      />
    );
  }

  renderBoard() {
    const squares = this.props.squares;
    const rows = squares.map((row, i) => {
      const cellsInRow = row.map((cell, j) => {
        return <span key={i + '' + j}>{this.renderSquare(i, j)}</span>;
      });
      return <div className='board-row' key={i}>{cellsInRow}</div>;
    });
    return <div>{rows}</div>;
  }

  render() {
    return (
      <div className='lifeTable'>
        {this.renderBoard()}
      </div>
    );
  }
}

LifeTable.propTypes = {
  squares: React.PropTypes.array.isRequired,
  rows: React.PropTypes.number.isRequired,
  cols: React.PropTypes.number.isRequired,
  handleClick: React.PropTypes.func.isRequired,
  giveLife: React.PropTypes.func.isRequired
};
