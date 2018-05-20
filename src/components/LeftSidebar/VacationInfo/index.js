import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import TimeDisplay from '../../TimeDisplay';

class VacationInfo extends Component {
  render() {
    let {vacationInfo, companySettings} = this.props;
    return (
      <div className="vacation-info">
        <div>
          <p>Days Remaining</p>
          <h1><TimeDisplay time={vacationInfo.timeRemaining} /></h1>
          <ul className="no-bullets">
            <li>Requested: <TimeDisplay time={vacationInfo.timePending} /></li>
            <li>Accepted: <TimeDisplay time={vacationInfo.timeApproved} /></li>
          </ul>
        </div>
        <div>
          <h5>Accurment Policy</h5>
          <ul className="no-bullets">
            <li>Term: {companySettings.vacationAccurmentTerm}</li>
            <li>Date: {moment(vacationInfo.timeAccrumentDate).format('MM/DD/YYYY')}</li>
            <li>Amount: <TimeDisplay time={vacationInfo.timeAccrumentAmount} /></li>
          </ul>
          <h5>Rollover Policy</h5>
          <ul className="no-bullets">
            <li>Date: {moment(vacationInfo.timeExpireDate).format('MM/DD/YYYY')}</li>
            <li>Cap: <TimeDisplay time={vacationInfo.timeCap} /></li>
            <li>Expires: <TimeDisplay time={vacationInfo.timeWillExpire} /> <br /><small>(use it or loose it)</small></li>
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  vacationInfo: state.vacationInfo,
  companySettings: state.companySettings
})

export default connect(
  mapStateToProps
)(VacationInfo);
