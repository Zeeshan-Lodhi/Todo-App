import React from 'react'
import AddTodo from './Functional_Components/AddTodo/AddTodo'
import Footer from './Functional_Components/Footer/Footer'
import Header from './Functional_Components/Header/Header'
import './app.css'

const App = () => {
  return (
    <>
      <Header />
      <AddTodo />
      <Footer />
    </>
  )
}
export default App