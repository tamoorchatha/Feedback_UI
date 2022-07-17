import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import About from "./components/pages/About";
import AboutLinkIcon from "./components/AboutIconLink";
import Post from "./components/Post";
import { FeedbackProvider } from "./components/context/FeedbackContext";


export default function App() {

  

  return (
    <FeedbackProvider>
    <Router>
  
      <Header />
      <div className="container">
        
    <Routes>
      <Route path="/" element={
        <>
          <FeedbackForm />
        <FeedbackStats /> 
       <FeedbackList  />
        </>
      }>
         
        </Route>

      <Route path="/about" element={<About />}></Route>

      <Route path="/post/:id" element={<Post />}></Route>


      </Routes>

      <AboutLinkIcon />

      </div>
    </Router>
    </FeedbackProvider>
  );
}
