import { Component } from 'react';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  goodPlus = () => {
    this.setState(prevState => ({
      good: prevState.good +1
    }))
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

  render() {
    return (
      <div className="FeedBack">
        <h2>Please leave feedback</h2>

        <button type="button" onClick={this.goodPlus}>
          Good
        </button>
        <button type="button" onClick={this.neutralPlus}>
          Neutral
        </button>
        <button type="button" onClick={this.badPlus}>
          Bad
        </button>

        <h2>Statistics</h2>

        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad: {this.state.bad}</p>
      </div>
    );
  }
}

export default App;