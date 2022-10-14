import { Component } from 'react';
import Statistics from 'components/Statistics/Statistics';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Section from 'components/Section/Section';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  goodPlus = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  neutralPlus = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  badPlus = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((accum, item) => accum + item, 0);
  };

  countPositiveFeedbackPercentage = () => {
    return Number(
      Math.round((this.state.good / this.countTotalFeedback()) * 100)
    );
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage();
    
    return (
      <div className="FeedBack">
        <Section title="Please leave feedback">
          <FeedbackOptions
            onGoodPlus={this.goodPlus}
            onNeutralPlus={this.neutralPlus}
            onBadPlus={this.badPlus}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positiveFeedback={positiveFeedback}
          />
        </Section>
      </div>
    );
  }
}

export default App;
