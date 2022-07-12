import { useState } from "react";

import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
export default function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  function deleteFeedback(id){
    setFeedback(feedback.filter((item)=>{
      return item.id !== id
    }))
  }
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
      </div>
    </>
  );
}
