import React from "react";
import PropTypes from "prop-types";
import Notification from "./Notification";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div>
    {total(good, neutral, bad) ? (
      <ul>
        <li>Good:{good}</li>
        <li>Neutral:{neutral}</li>
        <li>Bad:{bad}</li>
        <li>Total:{total(good, neutral, bad)}</li>
        <li>Positive feedback:{positivePercentage(good, neutral, bad)}%</li>
      </ul>
    ) : (
      <Notification message="No feedback given" />
    )}
  </div>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func,
  positivePercentage: PropTypes.func,
};

export default Statistics;
