import PropTypes from 'prop-types';
import { StatisticsData } from './Statistics.styled'

const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => (
  <div>
    <StatisticsData>Good: {good}</StatisticsData>
    <StatisticsData>Neutral: {neutral}</StatisticsData>
    <StatisticsData>Bad: {bad}</StatisticsData>
    <StatisticsData>Total: {total}</StatisticsData>
    <StatisticsData>Positive feedback: {positiveFeedback}%</StatisticsData>
  </div>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired,
};

export default Statistics;