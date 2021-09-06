import Section from 'components/Section';
import React, { Component } from 'react';
import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from 'components/Statistics';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = e => {
    const value = e.target.name;
    console.log(value);

    this.setState(prevState => ({
      [value]: prevState[value] + 1,
    }));
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const totalCount = bad + neutral + good;
    return totalCount;
  };
  countPositiveFeedbackPercentage() {
    const { good, neutral, bad } = this.state;
    const total = bad + neutral + good;
    return ((good / total) * 100).toFixed(1);
  }

  render() {
    const { good, bad, neutral } = this.state;
    return (
      <div>
        <Section titel="Please leave feedback" />
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={this.handleFeedback}
        />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        ></Statistics>
      </div>
    );
  }
}
