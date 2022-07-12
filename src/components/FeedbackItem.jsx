import Card from "../shared/Card";
import propsTypes from "prop-types";

function FeedbackItem({item}) {

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <div className="text-display">{item.text}</div>
    </Card>
  )
}

FeedbackItem.propsTypes = {
  item: propsTypes.object.isRequired,
}
export default FeedbackItem
