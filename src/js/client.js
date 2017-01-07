import React from 'react';
import ReactDOM from 'react-dom';

import LifeTable from './life-table.js';

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
