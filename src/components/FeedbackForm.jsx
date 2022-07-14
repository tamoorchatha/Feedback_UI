import Card from "../shared/Card"
import Button from "../shared/Button";
import RatingSelect from "./RatingSelect";
import {useState} from "react";

function FeedbackForm() {

    const [inputText, setInputText] = useState("");
    const [btnIsDisabled, setBtnIsDisabled] = useState(true);
    const [message, setMessage] = useState("");
    const [rating, setRating] = useState(10);


    function handleForInput(event){
        if(inputText === ""){
            setBtnIsDisabled(true);
            setMessage(null)
        }else if(inputText !== "" && inputText.trim().length <= 10){
            setBtnIsDisabled(true);
            setMessage("review must be greater than 10 words");
        }else{
            setBtnIsDisabled(false);
            setMessage(null)
        }
        setInputText(event.target.value)
    }
    function formOnSubmit(e){
        e.preventDefault();
    }

    

  return (
    <Card>
        <form onSubmit={formOnSubmit}>
            <h2>
                How would you rate your service with us?
            </h2>

            <RatingSelect select={(rating)=>{setRating(rating)}}/>

            <div className="input-group">
                <input onChange={handleForInput} type="text" value={inputText} placeholder="Write a Review" />
                <Button type="submit" isDisabled={btnIsDisabled}>send</Button>
            </div>

            {message && <div className="message">{message}</div>}

        </form>
    </Card>
  )
}

export default FeedbackForm