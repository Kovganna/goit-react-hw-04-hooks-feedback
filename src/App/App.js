import { useState } from "react";
import "./App.css";
import Section from "../components/Section";
import Statistics from "../components/Statistics";
import FeedbackOptions from "../components/FeedbackOptions";

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onFeedbackValue = (e) => {
    switch (e.target.value) {
      case "good":
        return setGood((good) => good + 1);

      case "neutral":
        return setNeutral((neutral) => neutral + 1);

      case "bad":
        return setBad((bad) => bad + 1);

      default:
        return;
    }
  };

  const countTotalFeedback = (good, neutral, bad) => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = (good, neutral, bad) => {
    return countTotalFeedback(good, neutral, bad)
      ? Math.round((good * 100) / countTotalFeedback(good, neutral, bad))
      : 0;
  };

  const grades = ["good", "neutral", "bad"];
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
