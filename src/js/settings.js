import React from 'react';

export default class Settings extends React.Component {
  render() {
    return (
      <div className='settings'>
        <h2>Settings</h2>
        <p>Table dimension</p>
        <select onChange={this.props.boardChange} value={this.props.rows}>
          <option value='10'>10 x 10</option>
          <option value='20'>20 x 20</option>
          <option value='30'>30 x 30</option>
          <option value='40'>40 x 40</option>
        </select>
        <p>Speed</p>
        <select onChange={this.props.speedChange} value={this.props.speed}>
          <option value='2000'>Fast</option>
          <option value='4000'>Normal</option>
          <option value='6000'>Slow</option>
        </select>
      </div>
    );
  }
}

Settings.propTypes = {
  boardChange: React.PropTypes.func.isRequired,
  rows: React.PropTypes.number.isRequired,
  speed: React.PropTypes.string.isRequired,
  speedChange: React.PropTypes.func.isRequired
};
