import React from 'react';
import ReactDOM from 'react-dom';

import LifeTable from './life-table.js';
import Settings from './settings.js';

class Main extends React.Component {
  render() {
    return (
      <div className='main'>
        <h1>Game of Life</h1>
        <LifeTable />
        <Settings />
      </div>
    );
  }
}

const app = document.getElementById('app');
ReactDOM.render(<Main />, app);
