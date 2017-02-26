import React from 'react'
import { render } from 'react-dom'
import Todo from './components/Todo'
import reducer from './reducer.js'
import {createStore} from 'redux'

const initialState = {
  calendar: [
    {name: 'Monday',
    times:[
      {id:1, title:'morning'},
      {id:2, title: 'late morning'},
      {id:3, title:'lunch'},
      {id:4, title: 'afternoon'},
      {id:5, title: 'late afternoon'},
      {id:6, title: 'dinner'}
    ]},
    {name: 'Tuesday',
    times:[
      {id:1, title:'morning'},
      {id:2, title: 'late morning'},
      {id:3, title:'lunch'},
      {id:4, title: 'afternoon'},
      {id:5, title: 'late afternoon'},
      {id:6, title: 'dinner'}
    ]},
    {name: 'Wednesday',
    times:[
      {id:1, title:'morning'},
      {id:2, title: 'late morning'},
      {id:3, title:'lunch'},
      {id:4, title: 'afternoon'},
      {id:5, title: 'late afternoon'},
      {id:6, title: 'dinner'}
    ]},
    {name: 'Thursday',
    times:[
      {id:1, title:'morning'},
      {id:2, title: 'late morning'},
      {id:3, title:'lunch'},
      {id:4, title: 'afternoon'},
      {id:5, title: 'late afternoon'},
      {id:6, title: 'dinner'}
    ]},
    {name: 'Friday',
    times: [
      {id:1, title:'morning'},
      {id:2, title: 'late morning'},
      {id:3, title:'lunch'},
      {id:4, title: 'afternoon'},
      {id:5, title: 'late afternoon'},
      {id:6, title: 'dinner'}
    ]},
    {name: 'Saturday',
    times: [
      {id:1, title:'morning'},
      {id:2, title: 'late morning'},
      {id:3, title:'lunch'},
      {id:4, title: 'afternoon'},
      {id:5, title: 'late afternoon'},
      {id:6, title: 'dinner'}
    ]},
    {name: 'Sunday',
    times: [
      {id:1, title:'morning'},
      {id:2, title: 'late morning'},
      {id:3, title:'lunch'},
      {id:4, title: 'afternoon'},
      {id:5, title: 'late afternoon'},
      {id:6, title: 'dinner'}
    ]}
  ]
}

const store = createStore(reducer, initialState)

const main = document.querySelector('main')

store.subscribe( () => {
  var state = store.getState()
  render(<Todo name='mediterranean-calender' state={state} dispatch={store.dispatch} />, main)
})

store.dispatch({type: 'INIT'})
