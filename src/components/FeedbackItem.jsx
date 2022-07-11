

function FeedbackItem({rating, content}) {

  return (
    <div className='card'>
      <div className="num-display">{rating}</div>
      <div className="text-display">{content}</div>
    </div>
  )
}

export default FeedbackItem
