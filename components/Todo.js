import React, { Component } from 'react'
import Week from './Week'
import Emoji from './Emoji'
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import loginService from '../API/loginService'
import Signup from './Signup'
import Reset from '../API/Reset'

function Todo(props) {
  function login(e) {
    e.preventDefault()
    var userInfo = {
      username: document.getElementById('username').value,
      password: document.getElementById('password').value
    }
    loginService(userInfo, props.dispatch)
  }

  function reset(e) {
    e.preventDefault()
    var userId = props.state.emojis[0].userId
    console.log(userId)
    Reset(userId, props.dispatch)
  }

  if (props.state.signedIn) {
    return (
      <div>
      <h1>{props.name}</h1>
      <Week state={props.state} dispatch={props.dispatch}/>
      <button onClick={reset}>Reset</button>
      </div>
    )
  } else {
    return (
      <div>
        <h1>Login to Mediterranean Calendar</h1>
        <form>
          <input placeholder='username' type='text' id='username' />
          <input placeholder='password' type='password' id='password' />
          <input type='submit' value='Login!' onClick={login} />
        </form>
        <Signup dispatch={props.dispatch} />
      </div>
    )
  }
}


module.exports = DragDropContext(HTML5Backend)(Todo)
