import React from 'react'
import {List} from 'rsuite'
import {connect} from 'react-redux'

const Todos = ({ todos }) => {
    return (
        <section>
            <List>
                {todos.map((todo, i) => {
                    return (
                        <List.Item key={i} index={i}>
                            {todo.text}
                        </List.Item>
                    )
                })}

            </List>
        </section>
    )
}

export default connect(({todos}) => ({ todos }))(Todos)