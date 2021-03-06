import React from 'react';

export default class Settings extends React.Component {
  render() {
    return (
      <div className='settings'>
        <div className='settingDiv'>
          <label htmlFor='rows'><i>Rows</i></label>
          <select
            id='rows'
            onChange={this.props.rowsChange}
            value={this.props.rows}
            >
              <option value='10'>10</option>
              <option value='20'>20</option>
              <option value='30'>30</option>
              <option value='40'>40</option>
            </select>
        </div>
        <div className='settingDiv'>
          <label htmlFor='cols'><i>Columns</i></label>
          <select
            id='cols'
            onChange={this.props.colsChange}
            value={this.props.cols}
            >
              <option value='10'>10</option>
              <option value='20'>20</option>
              <option value='30'>30</option>
              <option value='40'>40</option>
            </select>
        </div>
        <div className='settingDiv'>
          <label htmlFor='speed'><i>Speed</i></label>
          <select
            id='speed'
            onChange={this.props.speedChange}
            value={this.props.speed}
            >
              <option value='500'>Fast</option>
              <option value='1000'>Normal</option>
              <option value='2000'>Slow</option>
            </select>
        </div>
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
