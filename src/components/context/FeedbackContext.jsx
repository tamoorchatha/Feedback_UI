import { createContext, useState, useEffect} from "react";
// import { v4 as uuidv4 } from "uuid";

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

  async function deleteFeedback(id) {
    if (window.confirm("ARE YOU SURE? DO YOU WANT TO DELETE IT?")) {
      await fetch(`http://localhost:5000/feedback/${id}`, {
        method: "DELETE"
      })
      setFeedback(
        feedback.filter((item) => {
          return item.id !== id;
        })
      );
    }
  }

  async function handleAddItem(newFeedback) {
    const response = await fetch(`http://localhost:5000/feedback`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(newFeedback)
    })
    // newFeedback.id = uuidv4();
    const data = await response.json()
    setFeedback([data, ...feedback]);
    // console.log(newFeedback)
  }

  function feedbackEdit(item) {
    setEditFeedback({
      item,
      edit: true,
    });
  }

  async function updateFeedback(id, updateItem) {
    const response = await fetch(`http://localhost:5000/feedback/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateItem)
    })

    const data =await response.json()
    setFeedback(
      feedback.map((item) =>
        item.id === id ? { ...item, ...data } : item
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
