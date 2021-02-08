
import { combineReducers, createStore, compose, applyMiddleware } from 'redux'
import { todos, addTodo, Todo } from './todos'


const reducers = combineReducers({
  todos,
  
})

export default createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

export { addTodo, Todo }