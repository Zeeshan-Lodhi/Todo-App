import React, { useEffect, useState } from 'react'
import { Button, Container, Form, Accordion, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, delTodo, AddEditTodo } from '../../REDUX/actions/actions'
import './addTodo.css'

const AddTodo = () => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [changeBtn, setChangeBtn] = useState(true)
    const [editId, setEditId] = useState(null)

    const todos = useSelector(state => state.todoReducer.todos)
    const dispatch = useDispatch()

    //Set the todos to localStorage
    useEffect(() => {
        localStorage.setItem("ourTodosList", JSON.stringify(todos))
    }, [todos])

    // For getting input field values
    const handleOnChangeTitle = (e) => {
        setTitle(e.target.value)
    }
    const handleOnChangeDescription = (e) => {
        setDescription(e.target.value)
    }

    //When user click on Add Todo Button 
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

        // When user click on upDate Todo button
        else if (!changeBtn) {
            // Here we call our addEditTodo action
            dispatch(AddEditTodo(editId, title, description))
            setTitle("")
            setDescription("")
            setChangeBtn(true)

        }
        else {
            // Here we call our addTodo action
            dispatch(addTodo(title, description))
            setTitle("")
            setDescription("")
        }
    }

    // When user click edit button
    const editTodo = (id) => {
        let newEditTodo = todos.find((elm) => {
            return elm.id === id
        })
        setChangeBtn(false)
        setTitle(newEditTodo.title)
        setDescription(newEditTodo.desc)
        setEditId(id)
    }


    return (
        <>
            < Container >
                <Container className="addTodoContainer mt-3">
                    <h2>Add a Todo</h2>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Todo Title</Form.Label>
                            <Form.Control type="text" onChange={handleOnChangeTitle} value={title} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Todo Description</Form.Label>
                            <Form.Control type="text" onChange={handleOnChangeDescription} value={description} />
                        </Form.Group>
                        {
                            changeBtn ? <Button variant="primary" type="submit" onClick={handleAddTodo}>Add Todo</Button>
                                :
                                <Button variant="primary" type="submit" onClick={handleAddTodo}>Update Todo</Button>
                        }
                    </Form>
                </Container>
            </Container >

            {/*............... Here our all Todo list will starting display .....................*/}
            <Container className="mt-5" style={{ height: "60vh" }}>
                <h2>Todo List</h2>
                {
                    todos <= 0 ? <p className="mt-3 ml-1">No todos left</p> :
                        //Here allTodos state (in App) will iterate
                        todos.map((elm) => {
                            return (
                                <>
                                    <Accordion key={elm.id}>
                                        <Card style={{ margin: 10 }} >

                                            <Card.Header style={{ display: "flex" }}>
                                                <span style={{ color: "black", textDecoration: "none", flex: 1, cursor: "pointer", alignSelf: "center", fontSize: 18, }}>
                                                    <Accordion.Toggle as={Card.Text} variant="link" eventKey="0" >{elm.title}</Accordion.Toggle>
                                                </span>
                                                <div className="d-flex">
                                                    <Button onClick={() => editTodo(elm.id)}>Edit</Button>
                                                    <Button variant="danger" className="mx-2" onClick={() => { dispatch(delTodo(elm.id)) }}>Delete</Button>
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
export default AddTodo