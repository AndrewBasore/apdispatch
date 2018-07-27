/*
 * Author: Andrew Basore
 * 
 * store.js is entrypoint for Redux state managemet
 * This is also where we add debugging middleware
 */

 // Dependencies
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers/root.js'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

import {updateTime} from './reducers/calendar';


const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      createLogger({collapsed: true}),
      thunkMiddleware
    )
  )
)

export default store

store.dispatch(updateTime());
setInterval( () =>{
  store.dispatch(updateTime());
}, 1000 * 60)