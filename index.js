import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import reducer from './reducer.js'
import {createStore} from 'redux'
import ItemTypes from './components/ItemTypes';

const initialState = {
  loginInProgress: false,
  loginUnsuccessful: false,
  signedIn: false,
  emojiCon: [
    {name: 'emoji',
    times: [
        {id:1, x: 0, y: 0},
        {id:2, x: 0, y: 1},
        {id:3, x: 0, y: 2},
        {id:4, x: 0, y: 3},
        {id:5, x: 0, y: 4},
        {id:6, x: 0, y: 5}
      ]},
    ],
  calendar: [
    {name: 'Monday',
    times:[
      {id:1, title:'morning', x: 1, y: 0},
      {id:2, title: 'late morning', x: 1, y: 1},
      {id:3, title:'lunch', x: 1, y: 2},
      {id:4, title: 'afternoon', x: 1, y: 3},
      {id:5, title: 'late afternoon', x: 1, y: 4},
      {id:6, title: 'dinner', x: 1, y: 5},
    ]},
    {name: 'Tuesday',
    times:[
      {id:1, title:'morning', x: 2, y: 0},
      {id:2, title: 'late morning', x: 2, y: 1},
      {id:3, title:'lunch', x: 2, y: 2},
      {id:4, title: 'afternoon', x: 2, y: 3},
      {id:5, title: 'late afternoon', x: 2, y: 4},
      {id:6, title: 'dinner', x: 2, y: 5}
    ]},
    {name: 'Wednesday',
    times:[
      {id:1, title:'morning', x: 3, y: 0},
      {id:2, title: 'late morning', x: 3, y: 1},
      {id:3, title:'lunch', x: 3, y: 2},
      {id:4, title: 'afternoon', x: 3, y: 3},
      {id:5, title: 'late afternoon', x: 3, y: 4},
      {id:6, title: 'dinner', x: 3, y: 5}
    ]},
    {name: 'Thursday',
    times:[
      {id:1, title:'morning',  x: 4, y: 0},
      {id:2, title: 'late morning', x: 4, y: 1},
      {id:3, title:'lunch', x: 4, y: 2},
      {id:4, title: 'afternoon', x: 4, y: 3},
      {id:5, title: 'late afternoon', x: 4, y: 4},
      {id:6, title: 'dinner', x: 4, y: 5}
    ]},
    {name: 'Friday',
    times: [
      {id:1, title:'morning', x: 5, y: 0},
      {id:2, title: 'late morning', x: 5, y: 1},
      {id:3, title:'lunch', x: 5, y: 2},
      {id:4, title: 'afternoon', x: 5, y: 3},
      {id:5, title: 'late afternoon', x: 5, y: 4},
      {id:6, title: 'dinner', x: 5, y: 5}
    ]},
    {name: 'Saturday',
    times: [
      {id:1, title:'morning', x: 6, y: 0},
      {id:2, title: 'late morning', x: 6, y: 1},
      {id:3, title:'lunch', x: 6, y: 2},
      {id:4, title: 'afternoon', x: 6, y: 3},
      {id:5, title: 'late afternoon', x: 6, y: 4},
      {id:6, title: 'dinner', x: 6, y: 5}
    ]},
    {name: 'Sunday',
    times: [
      {id:1, title:'morning', x: 7, y: 0},
      {id:2, title: 'late morning', x: 7, y: 1},
      {id:3, title:'lunch', x: 7, y: 2},
      {id:4, title: 'afternoon', x: 7, y: 3},
      {id:5, title: 'late afternoon', x: 7, y: 4},
      {id:6, title: 'dinner', x: 7, y: 5}
    ]}
  ],
  emojis: []
}


const store = createStore(reducer, initialState)

const main = document.querySelector('main')

store.subscribe( () => {
  var state = store.getState()
  render(<App name='Mediterranean Calendar' state={state} dispatch={store.dispatch} />, main)
})

store.dispatch({type: 'INIT'})
