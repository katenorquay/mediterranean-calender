import React, { Component } from 'react'
import signupService from '../API/signupService'

function Signup({dispatch}) {
  function signup(e) {
    e.preventDefault()
    var userInfo = {
      username: document.getElementById('signupusername').value,
      password: document.getElementById('signuppassword').value
    }
    signupService(userInfo, dispatch)
  }

  return (
    <div>
      <h1>Signup to Mediterranean Calendar</h1>
      <form>
        <input placeholder='username' type='text' id='signupusername' />
        <input placeholder='password' type='password' id='signuppassword' />
        <input type='submit' value='Signup!' onClick={signup} />
      </form>
    </div>
  )
}

module.exports = Signup
