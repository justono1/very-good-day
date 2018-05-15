import React, { Component } from 'react'

//Components
import VacationTime from './VacationTime'

class MainArea extends Component {
  render() {
    return (
      <div className="main-area">
        <VacationTime />
      </div>
    );
  }
}

export default MainArea;