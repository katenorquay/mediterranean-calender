import React, { Component } from 'react'
import Week from './Week'
import Emoji from './Emoji'
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import loginService from '../API/loginService'
import Signup from './Signup'
import Reset from '../API/Reset'
import EmojiPicker from './EmojiPicker'

function App({name, state, dispatch}) {
  function login(e) {
    e.preventDefault()
    var userInfo = {
      username: document.getElementById('username').value,
      password: document.getElementById('password').value
    }
    loginService(userInfo, dispatch)
  }

  function reset(e) {
    e.preventDefault()
    var userId = state.emojis[0].userId
    Reset(userId, dispatch)
  }

  if (state.signedIn) {
    return (
      <div>
        <h1>{name}</h1>
        <div className="frame">
          <EmojiPicker state={state} dispatch={dispatch} />
          <Week state={state} dispatch={dispatch}/>
        </div>
        <button onClick={reset}>Reset</button>
      </div>
    )
  }
   else {
    return (
      <div>
        <h1>Login to Mediterranean Calendar</h1>
        <form>
          <input placeholder='username' type='text' id='username' />
          <input placeholder='password' type='password' id='password' />
          <input type='submit' value='Login!' onClick={login} />
        </form>
        <Signup dispatch={dispatch} />
      </div>
    )
  }
}


module.exports = DragDropContext(HTML5Backend)(App)
