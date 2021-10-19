import { Component } from "react";
import "./App.css";
import Section from "../components/Section";
import Statistics from "../components/Statistics";
import FeedbackOptions from "../components/FeedbackOptions";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onFeedbackValue = (e) => {
    const feedbackOptions = e.target.value;
    this.setState((prevState) => ({
      ...prevState,
      [feedbackOptions]: prevState[feedbackOptions] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    let countTotalFeedback = this.countTotalFeedback();

    return countTotalFeedback
      ? Math.round((this.state.good * 100) / countTotalFeedback)
      : 0;
  };

  render() {
    const grades = ["good", "neutral", "bad"];
    const { onFeedbackValue } = this;
    const countTotalFeedback = this.countTotalFeedback();
    const { good, neutral, bad } = this.state;
    const countPositiveFeedbackPercentage =
      this.countPositiveFeedbackPercentage();
    return (
      <div>
        <Section title={"Please leave feedback"}>
          <FeedbackOptions grades={grades} onFeedbackValue={onFeedbackValue} />
        </Section>
        <Section title={"Statistics"}>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        </Section>
      </div>
    );
  }
}

export default App;
