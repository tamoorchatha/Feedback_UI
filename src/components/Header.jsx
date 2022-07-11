import propsTypes from "prop-types"

function Header({text, bgColor, textColor}) {
    const color = {
        backgroundColor: bgColor,
        color: textColor
    }
  return (
    <header style={color}>
      <div className="container">
        <h1>{text}</h1>
      </div>
    </header>
  )
}

Header.defaultProps = {
    text: "Feedback UI",
    bgColor: "rgba(0,0,0,0.4)",
    textColor: "#ff6a95"
}

Header.propsTypes = {
    text: propsTypes.string,
    bgColor: propsTypes.string,
    textColor: propsTypes.string
}

export default Header
