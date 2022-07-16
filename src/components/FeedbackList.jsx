import FeedbackItem from "./FeedbackItem";
import propsTypes from "prop-types";

function FeedbackList({feedback, handleDelete}) {
  return (
    <div className="container">
        {feedback.map((item)=>{
            return(
            
            <FeedbackItem key={item.id} item={item} handleDelete={handleDelete}/>
    
            )
        })}
    </div>
  )
}

FeedbackList.propsTypes = {
    feedback: propsTypes.arrayOf(
        propsTypes.shape({
            id: propsTypes.number.isRequired,
            rating: propsTypes.string.isRequired,
            text: propsTypes.string.isRequired
        })
    ),
    handleDelete: propsTypes.func,
}

export default FeedbackList