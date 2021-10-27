import React, { Component } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import './addTodo.css'

export class AddTodo extends Component {
    //..........In this component all states and functions will come from App component................

    render() {
        // destructuring the props from App component
        const { title, description, changeBtn, addEditTodo, addTodoFunc, handleOnChangeTitle, handleOnChangeDescription } = this.props;

        const handleAddTodo = (e) => {
            e.preventDefault();
            if (title === "" && description === "") {
                alert("Pls fill title and description")
            }
            else if (title === "") {
                alert("Title can not be empty")
            }
            else if (description === "") {
                alert("Description can not be empty")
            }

            //When user click on UpDate Todo button
            else if (description && title && !changeBtn) {
                // This addEditTodo func is defined in App component for adding edit todo
                addEditTodo()
            }
            else {
                // This addTodoFunc is defined in App component for adding todo

                addTodoFunc(title, description)

            }
        }

        return (
            < Container >
                <Container className="addTodoContainer mt-3">
                    <h2>Add a Todo</h2>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Todo Title</Form.Label>
                            <Form.Control type="text" onChange={handleOnChangeTitle} value={title} className="textFields" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Todo Description</Form.Label>
                            <Form.Control type="text" onChange={handleOnChangeDescription} value={description} className="textFields" />
                        </Form.Group>
                        {
                            //This is changeBtn state(in App) that describe either button should be dispaly "Add Todo" or "Update Todo"
                            changeBtn ? <Button variant="primary" type="submit" onClick={handleAddTodo}>Add Todo</Button> :
                                <Button variant="primary" type="submit" onClick={handleAddTodo}>Update Todo
                                </Button>
                        }
                    </Form>
                </Container>
            </Container >
        )
    }
}
export default AddTodo