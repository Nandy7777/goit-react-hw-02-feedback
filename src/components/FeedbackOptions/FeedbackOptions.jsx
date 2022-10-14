// import PropTypes from 'prop-types';

const FeedbackOptions = ({ onGoodPlus, onNeutralPlus, onBadPlus }) => (
  <div>
    <button type="button" onClick={onGoodPlus}>
      Good
    </button>
    <button type="button" onClick={onNeutralPlus}>
      Neutral
    </button>
    <button type="button" onClick={onBadPlus}>
      Bad
    </button>
  </div>
);

export default FeedbackOptions;