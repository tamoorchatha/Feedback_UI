import {useContext} from "react"
import FeedbackContext from "./context/FeedbackContext";

function FeedbackStats() {
    const {feedback} = useContext(FeedbackContext)

    // const average = async ()=>{
    //     const response = await feedback.reduce((acc, curr)=>{
    //       acc + curr.rating
    //     },0) / feedback.length;

    //     Math.round(response)
    //     return response
    // }
    console.log(feedback)
    const average = Math.round(
      feedback.reduce((acc, { rating }) => acc + +rating, 0) / feedback.length);

    // let average =  feedback.reduce((acc, {rating})=>{
    //     return acc + rating
    // }, 0) / feedback.length;
    // average = average.toFixed(1).replace(/[.,]0$/, '');
  return (
    <div className="feedback-stats">
        <h4>{feedback.length} Reviews</h4>
        <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}


export default FeedbackStats