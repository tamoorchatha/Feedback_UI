import { createContext, useState } from "react";
import {v4 as uuidv4} from "uuid"


const FeedbackContext = createContext();

export const FeedbackProvider = ({children})=>{
    const [feedback, setFeedback] =useState([{
        id: 1,
        text: "this is from context",
        rating: 10
    }])

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

    return(
        <FeedbackContext.Provider value={{
            feedback,
            deleteFeedback,
            handleAddItem
        }}>
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext;