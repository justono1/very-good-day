import React, { Component } from 'react';
import moment from 'moment';
import { DatePicker } from 'rc-datepicker';

//assets
import rightArrow from './icons/arrow-right.svg';

class RequestTime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDateOpen: false,
      endDateOpen: false,
      dateStart: moment(),
      dateEnd: moment()
    }

    this.openStartDate = this.openStartDate.bind(this);
    this.openEndDate = this.openEndDate.bind(this);
  }

  openStartDate() {
    this.setState(prevState => ({
      startDateOpen: !prevState.startDateOpen
    }));
    console.log("state", this.state);
  }

  openEndDate() {
    this.setState(prevState => ({
      endDateOpen: !prevState.endDateOpen
    }));
    console.log("state", this.state);
  }

  render() {

    const startClass = ['accordion-content'];
    if(this.state.startDateOpen) {
      startClass.push('show-accordion');
    }

    const endClass = ['accordion-content'];
    if(this.state.endDateOpen) {
      endClass.push('show-accordion');
    }

    return (
      <div className="request-time">
        <form>
          <div className="padding-container text-right">
            <label>
              All Day
              <input type="checkbox" name="allDay" checked={true} />
            </label>
          </div>

          <div className="calendar accordion-group">
            <div className="accordion-item">
              <div className="accordion-title" onClick={this.openStartDate}>
                {moment(this.state.dateStart).format('dddd, MMMM D YYYY')}
                <img src={rightArrow} alt="right arrow" className={this.state.startDateOpen ? 'accordion-active': ''} />
              </div>
              
              <div className={startClass.join(' ')}>
                <DatePicker value={this.state.dateStart} onChange={(date) => this.setState({dateStart: date})} />
              </div>
            </div>
            <div className="accordion-item">
              <div className="accordion-title" onClick={this.openEndDate}>
                {moment(this.state.dateEnd).format('dddd, MMMM D YYYY')}
                <img src={rightArrow} alt="right arrow" className={this.state.endDateOpen ? 'accordion-active': ''} />
              </div>
              
              <div className={endClass.join(' ')}>
                <DatePicker value={this.state.dateEnd} onChange={(date) => this.setState({dateEnd: date})} />
              </div>
            </div>
          </div>

          <div className="padding-container">
            <textarea name="message" placeholder="Your Message" />
            <button>Request Time</button>
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
