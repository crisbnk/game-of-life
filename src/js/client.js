import React from 'react';
import ReactDOM from 'react-dom';

class Square extends React.Component {
  render() {
    return (
      <button className="square" onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    );
  }
}

class LifeTable extends React.Component {
  constructor() {
    super();
    // Need to create Array of Array automatically (and give user the possibility to set it)
    this.state = {
      squares: [['00','01','02','03','04'],
      ['10','11','12','13','14'],
      ['20','21','22','23','24'],
      ['30','31','32','33','34'],
      ['40','41','42','43','44']]
    };
  }

  handleClick(i, j) {
    const squares = this.state.squares;
    squares[i][j] === 0 ? squares[i][j] = 1 : squares[i][j] = 0;
    this.setState({squares: squares});
  }

  giveLife() {
    let squares = this.state.squares;
    for(let i = 0; i < squares.length; i++) {
      console.log(squares[i]);
      for(let j = 0; j < squares[i].length; j++) {
        const n = i - 1 > -1 ? i - 1 : i + (squares.length - 1);
        const s = i + 1 < squares.length ? i + 1 : i - (squares.length - 1);
        const o = j - 1 > -1 ? j - 1 : j + (squares.length - 1);
        const e = j + 1 < squares.length ? j + 1 : j - (squares.length - 1);
        console.log(`${squares[i][j]}, sopra: ${squares[n][j]}, sotto: ${squares[s][j]}, destra: ${squares[i][e]}, sinistra: ${squares[i][o]}, NE: ${squares[n][e]}, NO: ${squares[n][o]}`);
        const neighborhood = [squares[n][j], squares[s][j], squares[i][e], squares[i][o], squares[n][e], squares[n][o], squares[s][e], squares[s][o]];
        const tot = neighborhood.reduce((a, b) => a + b);
        console.log(`squares ${i}${j} neighborhood is: ${tot}`);
      }
    }
  }

  renderSquare(i, j) {
    return <Square value={this.state.squares[i][j]} onClick={() => this.handleClick(i, j)} />;
  }

  render() {
    return (
      <div>
        <div>
          {/* Need to create the board automatically from user input */}
          <div className="board-row">
            {this.renderSquare(0,0)}
            {this.renderSquare(0,1)}
            {this.renderSquare(0,2)}
            {this.renderSquare(0,3)}
            {this.renderSquare(0,4)}
          </div>
          <div className="board-row">
            {this.renderSquare(1,0)}
            {this.renderSquare(1,1)}
            {this.renderSquare(1,2)}
            {this.renderSquare(1,3)}
            {this.renderSquare(1,4)}
          </div>
          <div className="board-row">
            {this.renderSquare(2,0)}
            {this.renderSquare(2,1)}
            {this.renderSquare(2,2)}
            {this.renderSquare(2,3)}
            {this.renderSquare(2,4)}
          </div>
          <div className="board-row">
            {this.renderSquare(3,0)}
            {this.renderSquare(3,1)}
            {this.renderSquare(3,2)}
            {this.renderSquare(3,3)}
            {this.renderSquare(3,4)}
          </div>
          <div className="board-row">
            {this.renderSquare(4,0)}
            {this.renderSquare(4,1)}
            {this.renderSquare(4,2)}
            {this.renderSquare(4,3)}
            {this.renderSquare(4,4)}
          </div>
        </div>
        <div className="button" onClick={() => this.giveLife()}>
          <button>Procedi</button>
        </div>
      </div>
    );
  }
}

class Main extends React.Component {
  render() {
    return (
      <div className="main">
        <h1>Game of Life</h1>
        <div className="lifeTable">
          <LifeTable />
        </div>
        <div className="settings">
          <p>Settings</p>
        </div>
      </div>
    );
  }
}

const app = document.getElementById('app');
ReactDOM.render(<Main />, app);
