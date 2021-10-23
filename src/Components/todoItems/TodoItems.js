import React, { Component } from 'react'
import { Accordion, Button, Card, Container } from 'react-bootstrap'

export class TodoItems extends Component {
    render() {
        return (
            <>
                <Container className="mt-5" style={{ height: "60vh" }}>
                    <h2>Todo List</h2>
                    {
                        this.props.allTodos <= 0 ? <p className="mt-3 ml-1">No todos left</p> :
                            //Here allTodos state (in App) will iterate
                            this.props.allTodos.map((elm) => {
                                return (
                                    <>
                                        <Accordion key={elm.id}>

                                            <Card style={{ margin: 10 }} >
                                                <Card.Header style={{ display: "flex" }}>
                                                    <span style={{ color: "black", textDecoration: "none", flex: 1, cursor: "pointer", alignSelf: "center", fontSize: 18, }}>
                                                        <Accordion.Toggle as={Card.Text} variant="link" eventKey="0" >{elm.title}</Accordion.Toggle>
                                                    </span>
                                                    <div className="d-flex">
                                                        <Button onClick={() => this.props.editTodo(elm.id)}>Edit</Button>
                                                        <Button variant="danger" className="mx-2" onClick={() => this.props.delTodo(elm.id)}>Delete</Button>
                                                    </div>
                                                </Card.Header>

                                                <Accordion.Collapse eventKey="0">
                                                    <Card.Body>
                                                        <blockquote className="blockquote mb-0">{elm.desc}</blockquote>
                                                        <p className="mt-2">_Created on_{elm.time}</p>
                                                    </Card.Body>
                                                </Accordion.Collapse>
                                            </Card>
                                        </Accordion>
                                    </>
                                )
                            })
                    }
                </Container>
            </>
        )
    }
}
export default TodoItems