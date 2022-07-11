import FeedbackItem from "./FeedbackItem"

function FeedbackList({feedback}) {
  return (
    <div className="container">
        {feedback.map((item)=>{
            return(
            <FeedbackItem key={item.id} rating={item.rating}  content={item.text}/>
            )
        })}
    </div>
  )
}

export default FeedbackList