import React from 'react';

export default class Settings extends React.Component {
  render() {
    return (
      <div className='settings'>
        <h2>Settings</h2>
        <p>Table dimension - Rows</p>
        <select onChange={this.props.rowsChange} value={this.props.rows}>
          <option value='10'>10</option>
          <option value='20'>20</option>
          <option value='30'>30</option>
          <option value='40'>40</option>
        </select>
        <p>Table dimension - Cols</p>
        <select onChange={this.props.colsChange} value={this.props.cols}>
          <option value='10'>10</option>
          <option value='20'>20</option>
          <option value='30'>30</option>
          <option value='40'>40</option>
        </select>
        <p>Speed</p>
        <select onChange={this.props.speedChange} value={this.props.speed}>
          <option value='500'>Fast</option>
          <option value='1000'>Normal</option>
          <option value='2000'>Slow</option>
        </select>
      </div>
    );
  }
}

Settings.propTypes = {
  cols: React.PropTypes.number.isRequired,
  colsChange: React.PropTypes.func.isRequired,
  rows: React.PropTypes.number.isRequired,
  rowsChange: React.PropTypes.func.isRequired,
  speed: React.PropTypes.string.isRequired,
  speedChange: React.PropTypes.func.isRequired
};
