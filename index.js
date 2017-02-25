import React from 'react'
import { render } from 'react-dom'
import Week from './components/Week'
import reducer from './reducer.js'
import {createStore} from 'redux'

const initialState = {
}

const store = createStore(reducer, initialState)

const main = document.querySelector('main')

store.subscribe( () => {
  var state = store.getState()
  render(<Week name='mediterranean-calender' state={state} dispatch={store.dispatch} />, main)
})

store.dispatch({type: 'INIT'})
