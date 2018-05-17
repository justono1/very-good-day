import React, { Component } from 'react';
import bellImg from './icons/Bell.svg';
import plusImg from './icons/Plus.svg';

class Nav extends Component {
  render() {
    return (
      <div>
        <div>
          <p>Person Name</p>
        </div>
        <ul className="no-bullets inline-block">
          <li><a href="#"><img src={bellImg} alt="Notifications" /></a></li>
          <li><img src={plusImg} alt="Request Time" /></li>
        </ul>
      </div>
    );
  }
}

export default Nav;