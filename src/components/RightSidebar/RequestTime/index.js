import React, { Component } from 'react';
import moment from 'moment';

//assets
import rightArrow from './icons/arrow-right.svg';

class RequestTime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDateOpen: false,
      endDateOpen: false
    }

    this.openStartDate = this.openStartDate.bind(this);
  }

  openStartDate() {
    this.setState(prevState => ({
      startDateOpen: !prevState.startDateOpen
    }));
    console.log("state", this.state);
  }

  render() {

    const startClass = ['accordion-content'];
    if(this.state.startDateOpen) {
      startClass.push('show-accordion');
    }

    return (
      <div className="request-time">
        <form>
          <div className="padding-container text-right">
            <label>
              All Day
              <input type="checkbox" name="allDay" />
            </label>
          </div>

          <div className="calendar accordion-group">
            <div className="accordion-item">
              <div className="accordion-title" onClick={this.openStartDate}>
                {moment().format('dddd, MMMM D YYYY')}
                <img src={rightArrow} alt="right arrow" className={this.state.startDateOpen ? 'accordion-active': ''} />
              </div>
              
              <div className={startClass.join(' ')}>
                <p>thiasdfa sdf as dfasdf as d fasdfasdfa sdfasdf as dfasdf as df asdf</p>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default RequestTime;


//  <div className="no-selection">
//    <h1>No Selection</h1>
//  </div>
