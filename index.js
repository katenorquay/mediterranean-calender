import React from 'react'
import { render } from 'react-dom'
import Todo from './components/Todo'
import reducer from './reducer.js'
import {createStore} from 'redux'

const initialState = {
}

const store = createStore(reducer, initialState)

const main = document.querySelector('main')

store.subscribe( () => {
  var state = store.getState()
  render(<Todo name='mediterranean-calender' state={state} dispatch={store.dispatch} />, main)
})

store.dispatch({type: 'INIT'})
