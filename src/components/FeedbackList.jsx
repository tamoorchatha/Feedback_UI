import FeedbackItem from "./FeedbackItem";
import propsTypes from "prop-types";

function FeedbackList({feedback}) {
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

FeedbackList.propsTypes = {
    feedback: propsTypes.arrayOf(
        propsTypes.shape({
            id: propsTypes.number.isRequired,
            rating: propsTypes.string.isRequired,
            text: propsTypes.string.isRequired
        })
    )
}

export default FeedbackList