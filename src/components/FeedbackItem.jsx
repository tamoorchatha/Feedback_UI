import Card from "../shared/Card";
import propsTypes from "prop-types";
import {FaTimes} from "react-icons/fa"
import {useContext} from "react"
import FeedbackContext from "./context/FeedbackContext";

function FeedbackItem({item}) {
  const {deleteFeedback} = useContext(FeedbackContext)

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={()=>deleteFeedback(item.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  )
}

FeedbackItem.propsTypes = {
  item: propsTypes.object.isRequired,
  handleDelete: propsTypes.func
}
export default FeedbackItem
