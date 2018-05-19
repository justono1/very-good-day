import React, { Component } from 'react';
import { connect } from "react-redux";

class VacationInfo extends Component {
  render() {
    let {vacationInfo} = this.props;
    return (
      <div className="vacation-info">
        <div>
          <p>Days Remaining</p>
          <h1>{vacationInfo.timeRemaining}</h1>
          <ul className="no-bullets">
            <li>Requested: {vacationInfo.timePending}</li>
            <li>Accepted: {vacationInfo.timeApproved}</li>
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

const mapStateToProps = (state) => ({
  vacationInfo: state.vacationInfo
})

export default connect(
  mapStateToProps
)(VacationInfo);
