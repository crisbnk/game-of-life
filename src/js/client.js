import React from 'react';
import ReactDOM from 'react-dom';

class Square extends React.Component {
  render() {
    return (
      <button className='square' onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    );
  }
}

class LifeTable extends React.Component {
  constructor() {
    super();
    // Need to create Array of Array automatically
    // (and give user the possibility to set it)
    const rows = 10;
    const cols = 10;
    const squares = Array(rows).fill().map(() => Array(cols).fill(0));
    this.state = {
      squares: squares,
      rows: rows,
      cols: cols
    };
  }

  createMatrix(r, c) {
    return Array(r).fill().map(() => Array(c).fill(0));
  }

  handleClick(i, j) {
    const squares = this.state.squares;
    squares[i][j] === 0 ? squares[i][j] = 1 : squares[i][j] = 0;
    this.setState({squares: squares});
  }

  giveLife() {
    let newValues = this.createMatrix(this.state.rows, this.state.cols);
    console.log(newValues);
    let squares = this.state.squares;
    for (let i = 0; i < squares.length; i++) {
      console.log(squares[i]);
      for (let j = 0; j < squares[i].length; j++) {
        const value = squares[i][j];
        const n = i - 1 > -1 ? i - 1 : i + (squares.length - 1);
        const s = i + 1 < squares.length ? i + 1 : i - (squares.length - 1);
        const o = j - 1 > -1 ? j - 1 : j + (squares.length - 1);
        const e = j + 1 < squares.length ? j + 1 : j - (squares.length - 1);
        console.log(`${value}, sopra: ${squares[n][j]}, sotto: ${squares[s][j]},
           destra: ${squares[i][e]}, sinistra: ${squares[i][o]},
           NE: ${squares[n][e]}, NO: ${squares[n][o]}`);
        const neighborhood = [
          squares[n][j], squares[s][j], squares[i][e],
          squares[i][o], squares[n][e], squares[n][o],
          squares[s][e], squares[s][o]
        ];
        const tot = neighborhood.reduce((a, b) => a + b);
        console.log(`squares ${i}${j} neighborhood is: ${tot}`);
        if (value === 0 && tot === 3) {
          newValues[i][j] = 1;
        } else if (value === 1 && (tot >= 2 && tot <= 3)) {
          newValues[i][j] = 1;
        } else {
          newValues[i][j] = 0;
        }
      }
      console.log('New values are: ', newValues);
      this.setState({squares: newValues});
    }
  }

  renderSquare(i, j) {
    return (
      <Square
        onClick={() => this.handleClick(i, j)}
        value={this.state.squares[i][j]}
      />
    );
  }

  renderBoard() {
    const squares = this.state.squares;
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
      <div>
        {this.renderBoard()}
        <div className='button' onClick={() => this.giveLife()}>
          <button>Procedi</button>
        </div>
      </div>
    );
  }
}

class Main extends React.Component {
  render() {
    return (
      <div className='main'>
        <h1>Game of Life</h1>
        <div className='lifeTable'>
          <LifeTable />
        </div>
        <div className='settings'>
          <p>Settings</p>
        </div>
      </div>
    );
  }
}

const app = document.getElementById('app');
ReactDOM.render(<Main />, app);
