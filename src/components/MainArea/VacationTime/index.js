import React, { Component } from 'react';

//Components
import Month from './Month';

class VacationTime extends Component {
  render() {
    return (
      <div className="vacation-time">
        <Month />
        <Month />
        <Month />
        <Month />
      </div>
    );
  }
}

export default VacationTime;