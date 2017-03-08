import React, { Component } from 'react'
import Week from './Week'
import Emoji from './Emoji'
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import loginService from '../API/loginService'
import Signup from './Signup'

function Todo(props) {
  function login(e) {
    e.preventDefault()
    var userInfo = {
      username: document.getElementById('username').value,
      password: document.getElementById('password').value
    }
    console.log(userInfo)
    loginService(userInfo, props.dispatch)
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
