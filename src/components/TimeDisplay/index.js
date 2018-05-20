import React from 'react';
import PropTypes from 'prop-types';

const TimeDisplay = ({time, display}) => {
  switch (display) {
    case 'seconds':
      return(
        <span>{time}</span>
      );
      break;
    case 'minutes':
      return (
        <span>{time / 60}</span>
      );
      break;
    case 'days':
    default:
      return (
        <span>{time / 60 / 60}</span>
      );
      break;
  }
}

TimeDisplay.propTypes = {
  time: PropTypes.number.isRequired,
  display: PropTypes.string
}

export default TimeDisplay;