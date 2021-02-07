import { combineReducers, createStore } from 'redux'
import {addTodo, todos, Todo } from './todos'

const reducers = combineReducers({
    todos,
})

export default createStore(reducers)

export { addTodo, Todo }