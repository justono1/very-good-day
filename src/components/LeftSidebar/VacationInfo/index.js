import React, { Component } from 'react';

class VacationInfo extends Component {
  render() {
    return (
      <div className="vacation-info">
        <div>
          <p>Days Remaining</p>
          <h1>11</h1>
          <ul className="no-bullets">
            <li>Requested: 1</li>
            <li>Accepted: 4</li>
          </ul>
        </div>
        <div>
          <h5>Accurment Policy</h5>
          <ul className="no-bullets">
            <li>Term: Annually</li>
            <li>Date: 8/16/2018</li>
            <li>Amount: 16</li>
          </ul>
          <h5>Rollover Policy</h5>
          <ul className="no-bullets">
            <li>Date: 8/16/2018</li>
            <li>Cap: 16</li>
            <li>Expores: 0 <br /><small>(use it or loose it)</small></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default VacationInfo;
