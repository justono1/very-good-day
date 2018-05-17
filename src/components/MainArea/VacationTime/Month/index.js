import React, { Component } from 'react'

//Components
import Date from './Date';

class Month extends Component {
  render() {
    return (
      <div className="month">
        <h1>MonthName</h1>
        <Date />
        <Date />
        <Date />
        <Date />
      </div>
    );
  }
}

export default Month;