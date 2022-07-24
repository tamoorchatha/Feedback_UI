import { createContext, useState, useEffect} from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  const [editFeedback, setEditFeedback] = useState({
    item: {},
    edit: false,
  });

  useEffect(()=>{
    fetchFeedback();
  },[]);

  const fetchFeedback = async ()=>{
    const response = await fetch("http://localhost:5000/feedback");
    const data = await response.json();
    setFeedback(data)
    setIsLoading(false)
  }

  function deleteFeedback(id) {
    if (window.confirm("ARE YOU SURE? DO YOU WANT TO DELETE IT?")) {
      setFeedback(
        feedback.filter((item) => {
          return item.id !== id;
        })
      );
    }
  }

  function handleAddItem(newFeedback) {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
    // console.log(newFeedback)
  }

  function feedbackEdit(item) {
    setEditFeedback({
      item,
      edit: true,
    });
  }

  function updateFeedback(id, updateItem) {
    setFeedback(
      feedback.map((item) =>
        item.id === id ? { ...item, ...updateItem } : item
      )
    );
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        editFeedback,
        isLoading,
        deleteFeedback,
        handleAddItem,
        feedbackEdit,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
