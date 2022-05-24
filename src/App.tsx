import './styles.css'
import 'boxicons'

/* 
TODO: make <h3>{props.textcontent}</h3> work
TODO: make Investing and Learning page
*/

function Entries(props) {
  return (
    <div className="entry">
      <button id="transparentbutton" onClick={props.event}>
        <box-icon name={props.emojiname} type={props.type}></box-icon>
      </button>
    </div>
  )
}

const Investing = () => { //TODO
  return (
    <div></div>
  )
}

const Learning = () => { //TODO
  return (
    <div></div>
  )
}

const Journaling = () => {
  window.addEventListener("input", (e) => {
    const element = e.target as HTMLInputElement
    const value = element!.value
    console.log(value)
  })
  return(
    <div className="paper">
      <textarea className="paperpage" placeholder="Start typing what is in your mind"></textarea>
    </div>  
  )
}

function App() {
  return (
    <div className='main'>
      <div className="leftbar">
        <div className="Investing">
          <Entries textcontent="Investing" emojiname="money-withdraw"/>
          <Investing/>
        </div>
        <div className="Journaling">
          <Entries textcontent="Journaling" emojiname="book-alt" event={event => console.log('Cheese')}/>
          <button>Save</button>
          <Journaling/>
        </div>
        <div className="Learning">
          <Entries textcontent="Learning" emojiname="graduation" type="solid"/>
          <Learning/>
        </div>
      </div>
    </div>
  )
}

export default App
