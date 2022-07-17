import Card from "../shared/Card"
import Button from "../shared/Button";
import RatingSelect from "./RatingSelect";
import {useState, useContext, useEffect} from "react";
import FeedbackContext from "./context/FeedbackContext";

function FeedbackForm() {
    const {handleAddItem, editFeedback} = useContext(FeedbackContext)

    useEffect(()=>{
        if(editFeedback.edit===true){
            setBtnIsDisabled(false);
            setText(editFeedback.item.text);
            setRating(editFeedback.item.rating)
        }
    },[editFeedback])

    const [text, setText] = useState("");
    const [btnIsDisabled, setBtnIsDisabled] = useState(true);
    const [message, setMessage] = useState("");
    const [rating, setRating] = useState(2);


    function handleForInput(event){
        if(text === ""){
            setBtnIsDisabled(true);
            setMessage(null)
        }else if(text !== "" && text.trim().length <= 10){
            setBtnIsDisabled(true);
            setMessage("review must be greater than 10 words");
        }else{
            setBtnIsDisabled(false);
            setMessage(null)
        }
        setText(event.target.value)
    }
    function formOnSubmit(e){
        e.preventDefault();
        if(text.trim().length > 10){
            const newFeedback = {
                text,
                rating
            }
            handleAddItem(newFeedback)
            setText("")
            setBtnIsDisabled(true)
        }
    }

    
    

  return (
    <Card>
        <form onSubmit={formOnSubmit}>
            <h2>
                How would you rate your service with us?
            </h2>

            <RatingSelect select={(selected)=>{setRating(selected)}}/>

            <div className="input-group">
                <input onChange={handleForInput} type="text" value={text} placeholder="Write a Review" />
                <Button type="submit" isDisabled={btnIsDisabled}>send</Button>
            </div>

            {message && <div className="message">{message}</div>}

        </form>
    </Card>
  )
}

export default FeedbackForm