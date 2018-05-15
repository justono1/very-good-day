import React, { Component } from 'react';

//Components
import RequestTime from './RequestTime';

class RightSidebar extends Component {
  render() {
    return (
      <div className="right-sidebar">
        <RequestTime />
      </div>
    );
  }
}

export default RightSidebar;
