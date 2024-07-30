import { useEffect, useState } from "react";
import './App.css'
import Description from './components/Description/Description.jsx'
import Options from './components/Options/Options.jsx'
import Feedback from './components/Feedback/Feedback.jsx'
import Notification from './components/Notification/Notification.jsx'
import Section from './components/Section/Section.jsx'

function App() {
const firstState = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  const [state, setState] = useState(() => {
    const storageFeedback = window.localStorage.getItem("savedState");
    return storageFeedback !== null ? JSON.parse(storageFeedback) : firstState;
  })


  const updateFeedback = (feedbackType) => {
    setState({ ...state, [feedbackType]: state[feedbackType] + 1 });
  }

   useEffect(() => {
    window.localStorage.setItem("savedState", JSON.stringify(state));
 }, [state]);
  

  const resetFeedback = () => {
     setState({ good: 0, neutral: 0, bad: 0 });
 }
  const totalFeedback = state.good + state.neutral + state.bad;
  const positiveFeedback = Math.round((state.good / totalFeedback) * 100);



  return (
    <>
      <Section>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          feedback={state}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />) :
       (
        <Notification/>
        )}
        </Section>
    </>
  )
}

export default App
