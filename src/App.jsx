import React from "react"
import './styles.css'
import 'boxicons'

function Entries(props) {
  return (
    <div className="entry">
      <button id="transparentbutton">
        <box-icon name={props.emojiname} type={props.type}></box-icon>
      </button>
      <h3>{props.textcontent}</h3>
    </div>
  )
}

function App() {
  return (
    <div className='main'>
      <Entries textcontent="Investing" emojiname="money-withdraw"/>
      <Entries textcontent="Journaling" emojiname="book-alt"/>
      <Entries textcontent="Learning" emojiname="graduation" type="solid"/>
      <div className="footer">
        <button onClick={event => window.location.href = "https://github.com/Gamsti1337"} id="transparentbutton">
          <abbr title="Visit my GitHub page so you can see this projects source code and more projects of mine"></abbr>
          <box-icon name='github' type='logo' ></box-icon>
        </button>
      </div>
    </div>
  )
}

export default App