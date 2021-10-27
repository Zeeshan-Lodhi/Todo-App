import React, { Component } from 'react'
import AddTodo from "./Components/AddTodo/AddTodo"
import Footer from "./Components/Footer/Footer"
import Header from "./Components/Header/Header"
import { Switch, Route } from "react-router-dom";

import './app.css'
import TodoItems from './Components/todoItems/TodoItems'
import HomePage from './Components/HomePage/HomePage';

//Get todos from LocalStorage 
const getLocalStorageTodos = () => {
  const ourTodosList = localStorage.getItem("ourTodosList")
  if (ourTodosList) {
    return JSON.parse(ourTodosList)
  } else { return [] }
}

//................. My all states and functions related to TODO are in this component......................

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: getLocalStorageTodos(), title: "", description: "", changeBtn: true, isEditTodo: null };
  }

  //For Todo input data (This onChange func will call in AddTodo component)
  handleOnChangeTitle = (e) => {
    this.setState({ title: e.target.value })
  }
  handleOnChangeDescription = (e) => {
    this.setState({ description: e.target.value })
  }

  //For Adding todos (This func will call in AddTodo component)
  addTodoFunc = (title, desc) => {

    // Here checking the title is already exist or not
    // const matchTitle = this.state.todos.filter((elm) => {
    //   return elm.title === title
    // })

    // if (matchTitle[0].title === title) {
    //   alert("Title already exist")
    // }
    // else {

    //Here we make single Todo object, 
    const myTodo = {
      id: new Date().getTime().toString(),
      title: title,
      desc: desc,
      time: new Date().toLocaleString()
    }
    this.setState({ todos: [...this.state.todos, myTodo], title: "", description: "" })

    // }
  }

  //Getting Edit todo When user click on edit button(This func will call in TodoItems component)
  editTodo = (id) => {
    let newEditTodo = this.state.todos.find((elm) => {
      return elm.id === id
    })

    this.setState({
      changeBtn: false,
      title: newEditTodo.title,
      description: newEditTodo.desc,
      isEditTodo: id
    })
  }

  //Add Edit todos When user click on Update Todo button(This func will call in AddTodo component)
  addEditTodo = () => {
    this.setState({
      todos: this.state.todos.map((elm) => {
        if (elm.id === this.state.isEditTodo) {
          return { ...elm, title: this.state.title, desc: this.state.description }
        }
        return elm
      })
    })
    this.setState({ title: "", description: "", changeBtn: true })
  }

  //Deleting todos when user click on Delete button (This func will call in TodoItems component)
  delTodo = (id) => {
    if (window.confirm("Are you sure")) {
      this.setState({
        todos: this.state.todos.filter((elm) => {
          return elm.id !== id
        })
      })
    }
  }

  //Set todos in LocalStorage =>Every time our state will change, This will Re-Render our component
  componentDidUpdate() {
    localStorage.setItem("ourTodosList", JSON.stringify(this.state.todos))
  }

  render() {
    return (
      <>
        <Header />
        <Switch>

          <Route exact path="/"> <HomePage /></Route>
          <Route path="/todos">
            <AddTodo
              addTodoFunc={this.addTodoFunc} title={this.state.title}
              description={this.state.description}
              handleOnChangeTitle={this.handleOnChangeTitle}
              handleOnChangeDescription={this.handleOnChangeDescription}
              changeBtn={this.state.changeBtn} addEditTodo={this.addEditTodo} />

            <TodoItems
              allTodos={this.state.todos}
              editTodo={this.editTodo} delTodo={this.delTodo} />
          </Route>

        </Switch>
        <Footer />
      </>
    )
  }
}
export default App