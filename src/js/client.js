import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './counter.js';
import LifeTable from './life-table.js';
import Timer from './timer.js';
import Settings from './settings.js';
import style from '../style/main.scss';

import {createMatrix, randomValues} from './utils.js';

class Main extends React.Component {
  constructor(props) {
    super(props);
    const rows = 10;
    const cols = 10;
    // Need to let user choose interval
    const speed = '1000';
    const squares = randomValues(createMatrix(rows, cols, 0));
    this.state = {
      squares: squares,
      rows: rows,
      cols: cols,
      speed: speed,
      generation: 0
    };
    this.giveLife = this.giveLife.bind(this);
  }

  componentDidMount() {
    const speed = parseInt(this.state.speed, 10);
    this.timerId = setInterval(this.giveLife, speed);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  startTimer() {
    const speed = parseInt(this.state.speed, 10);
    this.timerId = setInterval(this.giveLife, speed);
  }

  stopTimer() {
    console.log('STOP');
    clearInterval(this.timerId);
  }

  handleClick(i, j) {
    let squares = this.state.squares;
    if (squares[i][j] === 0) {
      squares[i][j] = 1;
    } else {
      squares[i][j] = 0;
    }
    this.setState({
      squares: squares
    });
  }

  giveLife() {
    let generation = this.state.generation;
    let newValues = createMatrix(
      this.state.rows,
      this.state.cols,
      0
    );
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
    }
    generation++;
    this.setState({
      squares: newValues,
      generation: generation
    });
  }

  colsChange(event) {
    this.stopTimer();
    this.clearBoard();
    const rows = this.state.rows;
    const cols = parseInt(event.target.value, 10);
    const squares = createMatrix(rows, cols, 0);
    this.setState({
      cols: cols,
      squares: squares
    });
  }

  rowsChange(event) {
    this.stopTimer();
    this.clearBoard();
    const rows = parseInt(event.target.value, 10);
    const cols = this.state.cols;
    const squares = createMatrix(rows, cols, 0);
    this.setState({
      rows: rows,
      squares: squares
    });
  }

  clearBoard() {
    const clearValues = createMatrix(
      this.state.rows,
      this.state.cols,
      0
    );
    this.stopTimer();
    this.setState({
      squares: clearValues,
      generation: 0
    });
  }

  speedChange(event) {
    this.stopTimer();
    const speed = event.target.value;
    console.log(speed);
    this.setState({
      speed: speed
    });
    this.startTimer();
  }

  render() {
    return (
      <div className='main container'>
        <div className='title'>
          <h1>Game of Life</h1>
          <hr/>
        </div>
        <div className='menuBar'>
          <Timer
            clearBoard={() => this.clearBoard()}
            startTimer={() => this.startTimer()}
            stopTimer={() => this.stopTimer()}
          />
          <Counter
            generation={this.state.generation}
          />
          <Settings
            cols={this.state.cols}
            colsChange={this.colsChange.bind(this)}
            rows={this.state.rows}
            rowsChange={this.rowsChange.bind(this)}
            speed={this.state.speed}
            speedChange={this.speedChange.bind(this)}
          />
        </div>
        <div className='game'>
          <LifeTable
            {...this.state}
            giveLife={this.giveLife.bind(this)}
            handleClick={this.handleClick.bind(this)}
          />
        </div>
        <div className='text-right'>
          <p>© 2017 CRISBNK</p>
        </div>
      </div>
    );
  }
}

const app = document.getElementById('app');
ReactDOM.render(<Main />, app);
