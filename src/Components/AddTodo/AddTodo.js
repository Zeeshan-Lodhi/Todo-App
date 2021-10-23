import React, { Component } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import './addTodo.css'

export class AddTodo extends Component {
    //..........In this component all states and functions will come from App component................

    //When user click on AddTodo Button 
    handleAddTodo = (e) => {
        e.preventDefault();
        if (this.props.title === "" && this.props.description === "") {
            alert("Pls fill title and description")
        }
        else if (this.props.title === "") {
            alert("Title can not be empty")
        }
        else if (this.props.description === "") {
            alert("Description can not be empty")
        }

        //When user click on UpDate Todo button
        else if (this.props.description && this.props.title && !this.props.changeBtn) {
            // This addEditTodo func is defined in App component for adding edit todo
            this.props.addEditTodo()
        }
        else {
            // This addTodoFunc is defined in App component for adding todo
            this.props.addTodoFunc(this.props.title, this.props.description)

        }
    }

    render() {
        return (
            < Container >
                <Container className="addTodoContainer mt-3">
                    <h2>Add a Todo</h2>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Todo Title</Form.Label>
                            <Form.Control type="text" onChange={this.props.handleOnChangeTitle} value={this.props.title} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Todo Description</Form.Label>
                            <Form.Control type="text" onChange={this.props.handleOnChangeDescription} value={this.props.description} />
                        </Form.Group>
                        {
                            //This is changeBtn state(in App) that describe either button should be dispaly "Add Todo" or "Update Todo"
                            this.props.changeBtn ? <Button variant="primary" type="submit" onClick={this.handleAddTodo}>Add Todo</Button> :
                                <Button variant="primary" type="submit" onClick={this.handleAddTodo}>Update Todo
                                </Button>
                        }
                    </Form>
                </Container>
            </Container >
        )
    }
}
export default AddTodo