import { useState } from "react";
import {v4 as uuidv4} from "uuid"

import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";


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

  function handleAddItem(newFeedback){
    newFeedback.id = uuidv4()
    setFeedback([newFeedback,...feedback])
    // console.log(newFeedback)
  }

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm handleAdd={handleAddItem}/>
        <FeedbackStats feedback={feedback}/>
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}
