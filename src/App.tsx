import * as React from 'react'
import './styles.css'

/* 
TODO: make Investing and Learning page        
*/

function Entries(props: any) {
  return (
    <div className="entry">
      <button id="transparentbutton" onClick={props.event}>
        <i className={props.emojiname}></i>
      </button>
      <h3>{props.textcontent}</h3>
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
  function saving() {
    window.addEventListener("input", (e) => {
    const element = e.target as HTMLInputElement //im actually braindead
    const value = element.value
    /* backend
    const express = require('express')
     */
    }) 
  }
  return(
    <div className="paper">
      <textarea className="paperpage" placeholder="Start typing what is in your mind"></textarea>
      <button className="save-btx" onClick={event => saving()}>Save</button>
    </div>  
  )
}

function App() {
  return (
    <div className='main'>
      <div className="leftbar">
        <div className="Investing">
          <Entries textcontent="Investing" emojiname="bx bx-money-withdraw bx-sm"/>
          <Investing/>
        </div>
        <div className="Journaling">
          <Entries textcontent="Journaling" emojiname="bx bx-book-alt bx-sm"/>
          <Journaling/>
        </div>
        <div className="Learning">
          <Entries textcontent="Learning" emojiname="bx bxs-graduation bx-sm"/>
          <Learning/>
        </div>
      </div>
    </div>
  )
}
// now i need to connect this button to the backend
export default App