import FeedbackItem from "./FeedbackItem";
import {useContext} from "react"
import FeedbackContext from "./context/FeedbackContext";
function FeedbackList() {
    const {feedback} = useContext(FeedbackContext)
   return (
    <div className="container">
        {feedback.map((item)=>{
            return(
            
            <FeedbackItem key={item.id} item={item}/>
    
            )
        })}
    </div>
  )
}


export default FeedbackList