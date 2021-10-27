import React from 'react'
import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router'
import './homePage.css'

const HomePage = () => {
    const history = useHistory()
    const pushToTodo = () => {
        history.push("/todos")
    }
    return (
        <>
            <div className="homePage">
                <h1>One safe place for all your todos</h1>
                <Button variant="primary" onClick={pushToTodo}>Create Todo</Button>
            </div>
        </>
    )
}

export default HomePage
