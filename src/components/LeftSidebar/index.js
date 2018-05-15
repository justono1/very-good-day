import React, { Component } from 'react'

//Components
import VacationInfo from './VacationInfo'

class LeftSidebar extends Component {
  render() {
    return (
      <div className="left-sidebar">
        <VacationInfo />
      </div>
    );
  }
}

export default LeftSidebar;