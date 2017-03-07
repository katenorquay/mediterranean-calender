import React, { Component } from 'react'
import Week from './Week'
import Emoji from './Emoji'
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import signupApiCall from '../API/signupApiCall'

function Todo(props) {
  function signup(e) {
    e.preventDefault()
    var userInfo = {
      username: document.getElementById('username').value,
      password: document.getElementById('password').value
    }
    console.log(userInfo)
    signupApiCall(userInfo, props.dispatch)
  }

  if (props.state.signedIn) {
    return (
      <div>
      <h1>{props.name}</h1>
      <Week state={props.state} dispatch={props.dispatch}/>
      <button onClick={() =>{props.dispatch({type: 'RESET'})}}>Reset</button>
      </div>
    )
  } else {
    return (
      <div>
        <h1>Signup to Mediterranean Calendar</h1>
        <form>
          <input placeholder='username' type='text' id='username' />
          <input placeholder='password' type='password' id='password' />
          <input type='submit' value='Signup!' onClick={signup} />
        </form>
      </div>
    )
  }
}


module.exports = DragDropContext(HTML5Backend)(Todo)
