import React, { useState } from "react"
import "./styles.css"

function Entries (props: any) {
  return (
    <div className="entry">
      <button id="transparentbutton" onClick={props.event}>
        <i className={props.emojiname}></i>
      </button>
      <h3>{props.textcontent}</h3>
    </div>
  )
}
const Investing = (props: any) => { // TODO
  const [number, setNumber] = useState(0)
  function increase () {
    if (number < 100) { setNumber(number + 1) } // tables are 1vh, so the browser can fit just 100
  }
  function decrease () {
    if (number > 0) { setNumber(number - 1) } // if there are more than 0 tables, tables will get removed
  }
  return (
    <div className="Investing" id={props.id}>
      <h1 className="number">{number}</h1>
      <input type="text"></input>
      <div className="investing-btx">
        <button className="addTable" onClick={increase}>Add Table</button>
        <button className="removeTable" onClick={decrease}>Remove Table</button>
      </div>
    </div>
  )
}
const Learning = (props: any) => { // TODO
  return (
    <div className="Learning" id={props.id}></div>
  )
}
const Journaling = (props: any) => {
  window.addEventListener("input", (e) => {
    const element = e.target as HTMLInputElement
    const value: string = element!.value
    console.log(value)
  })
  return (
    <div className="paper" id={props.id}>
      <textarea className="paperpage" placeholder="Start typing what is in your mind"></textarea>
      <button className="save-btx">Save</button>
    </div>
  )
}
function App () {
  const [show, setShow] = useState(false) // NOT clean code (working on cleaning this atrocity)
  const [show1, setShow1] = useState(false) // NOT clean code (working on cleaning this atrocity)
  const [show2, setShow2] = useState(false) // NOT clean code (working on cleaning this atrocity)
  return (
    <div className='main' style={{ background: "#3e3e3e" }}>
      <div className="leftbar">
        <div className="Investing">
          <Entries textcontent="Investing" emojiname="bx bx-money-withdraw bx-sm" event={() => setShow((s) => !s)}/>
          <Investing id={`${show ? "show" : "hide"}`}/>
        </div>
        <div className="Journaling">
          <Entries textcontent="Journaling" emojiname="bx bx-book-alt bx-sm" event={() => setShow1((s) => !s)}/>
          <Journaling id={`${show1 ? "show" : "hide"}`}/>
        </div>
        <div className="Learning">
          <Entries textcontent="Learning" emojiname="bx bxs-graduation bx-sm" event={() => setShow2((s) => !s)}/>
          <Learning id={`${show2 ? "show" : "hide"}`}/>
        </div>
      </div>
    </div>
  )
}
export default App