import { useState } from "react";
import {v4 as uuidv4} from "uuid"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import About from "./components/pages/About";
import AboutLinkIcon from "./components/AboutIconLink";
import Post from "./components/Post";


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
    <Router>
  
      <Header />
      <div className="container">
        
    <Routes>
      <Route path="/" element={
        <>
          <FeedbackForm handleAdd={handleAddItem}/>
        <FeedbackStats feedback={feedback}/> 
       <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
        </>
      }>
         
        </Route>

      <Route path="/about" element={<About />}></Route>

      <Route path="/post/:id" element={<Post />}></Route>


      </Routes>

      <AboutLinkIcon />

      </div>
    </Router>
  );
}
