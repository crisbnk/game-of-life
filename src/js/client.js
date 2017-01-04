import React from 'react';
import ReactDOM from 'react-dom';

class Square extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0,
    };
  }

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
      squares: [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]
    };
  }

  handleClick(i, j) {
    const squares = this.state.squares;
    squares[i][j] === 0 ? squares[i][j] = 1 : squares[i][j] = 0;
    this.setState({squares: squares});
  }

  renderSquare(i, j) {
    return <Square value={this.state.squares[i][j]} onClick={() => this.handleClick(i, j)} />;
  }

  render() {
    return (
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
