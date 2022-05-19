import React from "react";
import './styles.css'
import 'boxicons'
//onClick={window.location.href = "https://github.com/Gamsti1337/habittracker"}
function Entries(props) {
  return (
    <div className="entry">
      <box-icon name={props.emojiname} type={props.type}></box-icon>
      <h3>{props.textcontent}</h3>
    </div>
  );
}

function App() {
  return (
    <div className='main'>
      <Entries textcontent="Investing" emojiname="money-withdraw"/>
      <Entries textcontent="Journaling" emojiname="book-alt"/>
      <Entries textcontent="Learning" emojiname="graduation" type="solid"/>
      <Entries textcontent="" emojiname=""/>
      <div className="footer">
        <button>
          <box-icon name='github' type='logo' ></box-icon>
        </button>
      </div>
    </div>
  );
}

export default App;
