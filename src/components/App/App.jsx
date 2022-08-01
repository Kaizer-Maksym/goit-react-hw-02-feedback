import React, { Component } from 'react';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Notification } from '../Notification/Notification';
import { Statistic } from '../Statistic/Statistic';
import { Section } from 'components/Section/Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  heandlFeedback = e => {
    const textContent = e.target.textContent;
    if (textContent === 'Good') {
      this.setState(prevState => ({ good: prevState.good + 1 }));
    }
    if (textContent === 'Neutral') {
      this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
    }
    if (textContent === 'Bad') {
      this.setState(prevState => ({ bad: prevState.bad + 1 }));
    }
  };

  countTotalFeedback = () => {
    const total = Object.values(this.state).reduce((a, b) => a + b, 0);
    return total;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = Math.round(100 * (good / total)) + '%';
    const options = Object.keys(this.state);

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.heandlFeedback}
          />
        </Section>

        <Section title="Statistics">
          {total > 0 ? (
            <Statistic
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}
