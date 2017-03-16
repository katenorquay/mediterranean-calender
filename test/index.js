var test = require('tape')
var reducer = require('../reducer')
var freeze = require('deep-freeze')

test('testing mediterranean-calendar', function (t) {
  t.ok(true)
  t.end()
})

test('LOGIN_INIT', function (t) {
  var initialState = {
    loginInProgress: false
  }
  // arrange
  const expectedLoginInProgress = true
  freeze(initialState)
  const action = {type: 'LOGIN_INIT'}
  // act
  const newState = reducer(initialState, action)
  // assert
  t.equal(newState.loginInProgress, expectedLoginInProgress, 'login init changes logininprogress to true')
  t.end()
})

test('LOGIN_SUCCESSFUL', function (t) {
  var initialState = {
    LoginInProgress: true,
    loginUnsuccessful: true
  }
  // arrange
  const expectedLoginInProgress = false
  const expectedLoginUnsuccessful = false
  freeze(initialState)
  const action = {type: 'LOGIN_SUCCESSFUL'}
  // act
  const newState = reducer(initialState, action)
  // assert
  t.equal(newState.loginInProgress, expectedLoginInProgress, 'Login succesful changes state to loginInProgress to false')
  t.equal(newState.loginUnsuccessful, expectedLoginUnsuccessful, 'Login succesful changes state to loginUnsuccessful to false')
  t.end()
})

test('LOGIN_UNSUCCESSFUL', function (t) {
  var initialState = {
    loginInProgress: true,
    loginUnsuccessful: false
  }
  // arrange
  const expectedLoginInProgress = false
  const expectedLoginUnsuccessful = true
  freeze(initialState)
  const action = {type: 'LOGIN_UNSUCCESSFUL'}
  // act
  const newState = reducer(initialState, action)
  // assert
  t.equal(newState.loginInProgress, expectedLoginInProgress, 'Login unsuccesful changes state to loginInProgress to false')
  t.equal(newState.loginUnsuccessful, expectedLoginUnsuccessful, 'Login unsuccesful changes state to loginUnsuccessful to false')
  t.end()
})
