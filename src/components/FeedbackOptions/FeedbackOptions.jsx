import PropTypes from 'prop-types';
import shortid from 'shortid';
import { Button } from './FeedbackOptions.styled'

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    {Object.keys(options).map(option => (
      <Button
        key={shortid.generate()}
        name={option}
        type="button"
        onClick={onLeaveFeedback}
      >
        {option}
      </Button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
