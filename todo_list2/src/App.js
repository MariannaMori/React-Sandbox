import React, {useState} from 'react'
import 'rsuite/dist/styles/rsuite-default.css'
import { Button, Container, Header, Navbar, Content, FlexboxGrid, Panel, Form, FormGroup,ControlLabel, FormControl, ButtonToolbar, Alert, Divider   } from 'rsuite'
import { connect } from 'react-redux'
import { addTodo, Todo } from './redux'
import './App.css'
import {generate} from 'shortid'
import Todos from './components/Todos'

const App = ({ dispatch }) => {
  const [state, setState] = useState({ txt: ''})

  const updateTxt = (txt) => setState({ txt })

  const createTodo = () => {
    dispatch(addTodo(new Todo(generate(), state.txt)))
    Alert.success(`Added todo txt => ${state.txt}`)
    setState({ txt: '' })

  }
  return (
    <div className="main">
    <Container>
      <Header>
        <Navbar appearance="inverse">
          <Navbar.Header>
            <p className="navbar-brand">Redux React TODO</p>
          </Navbar.Header>
        </Navbar>
      </Header>
      <Content>
        <FlexboxGrid justify="center">
          <FlexboxGrid.Item colspan={12}>
            <Panel header={<h3>Add ToDo</h3>} bordered>
              <Form fluid>
                <FormGroup>
                  <ControlLabel>What you want to do?</ControlLabel>
                  <FormControl
                    name="task"
                    onChange={updateTxt}
                    value={state.txt}
                  />
                </FormGroup>
                <FormGroup>
                  <ButtonToolbar>
                    <Button appearance="primary" onClick={createTodo}>
                      Create
                    </Button>
                  </ButtonToolbar>
                </FormGroup>
              </Form>
            </Panel>
            <Divider />
            <Todos delTodo={delTodo} todos={todos} />
          </FlexboxGrid.Item>
        </FlexboxGrid>
      </Content>
    </Container>
  
  
  </div>
  )
}

export default connect()(App)