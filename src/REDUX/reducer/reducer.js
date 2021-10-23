// Getting todos from localStorage
const getLocalStorageTodos = () => {
    const ourTodosList = localStorage.getItem("ourTodosList")
    if (ourTodosList) {
        return JSON.parse(ourTodosList)
    } else { return [] }
}
// Initialize our todo state with localStorage Todos
const initState = { todos: getLocalStorageTodos() }

const todoReducer = (state = initState, action) => {
    switch (action.type) {
        //..........................Case for adding todos.........................................
        case "ADD_TODO":
            const { id, title, desc, time } = action.payload
            // Making todo object
            const myTodo = {
                id: id,
                title: title,
                desc: desc,
                time: time
            }
            return {
                todos: [...state.todos, myTodo]
            }

        //................Case for editing todos.............................
        case "EDIT_TODO":
            return {
                todos: state.todos.map((elm) => {
                    if (elm.id === action.payload.id) {
                        return { ...elm, title: action.payload.title, desc: action.payload.desc, }
                    }
                    return elm
                })
            }


        //..........................Case for deleting todos.............................
        case "DEL_TODO":
            const updateTodo = state.todos.filter((elm) => {
                return elm.id !== action.payload.id
            })
            return {
                todos: updateTodo
            }

        default: return state
    }
}
export default todoReducer