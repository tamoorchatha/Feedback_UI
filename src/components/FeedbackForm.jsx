import Card from "../shared/Card"
import {useState} from "react";

function FeedbackForm() {

    const [inputText, setInputText] = useState("");
    const [getInput, setGetInput] = useState(inputText)
    
    function  handleForInput(event){
        setInputText(event.target.value)
    }

    function handleOnButtonSend(){
        setGetInput(inputText);
        console.log(getInput)
    }

  return (
    <Card>
        <form onSubmit={(e)=>{
            e.preventDefault();
            setInputText("")
        }}>
            <h2>
                How would you rate your service with us?
            </h2>
            <div className="input-group">
                <input onChange={handleForInput} type="text" placeholder="Write a Review" />
                <button onClick={handleOnButtonSend} type="submit">send</button>
            </div>
        </form>
    </Card>
  )
}

export default FeedbackForm