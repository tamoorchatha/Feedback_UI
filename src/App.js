import { useState } from "react";

import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
export default function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  function deleteFeedback(id) {
    if (window.confirm("ARE YOU SURE? DO YOU WANT TO DELETE IT?")) {
      setFeedback(
        feedback.filter((item) => {
          return item.id !== id;
        })
      );
    }
  }
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackStats feedback={feedback}/>
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}
