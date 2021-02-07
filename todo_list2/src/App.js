import React from 'react'
import 'rsuite/dist/styles/rsuite-default.css'
import { Button } from 'rsuite'
import { connect } from 'react-redux'
import { addTodo, ToDo } from './redux'
import './App.css'

function App = ({ dispatch, todos }) => {
  const createTodo = () => {
    dispatch(addTodo(new ToDo(1, 'learn redux')))

  }
  return (
  <main>
<Button appearance="primary" onClick={createTodo}>
Add Todo list
</Button>

  </main>
  )
}

export default connect((state) => {
  console.log(state)
  return { todos: state.todos }
})(App)