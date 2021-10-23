export const addTodo = (title, desc) => {
    return {
        type: "ADD_TODO",
        payload: {
            title, desc,
            // Generating the unique id and time for our Todo
            id: new Date().getTime().toString(),
            time: new Date().toLocaleString()
        }
    }
}

export const AddEditTodo = (id, title, desc) => {
    return {
        type: "EDIT_TODO",
        payload: { id, title, desc }
    }
}

export const delTodo = (id) => {
    return {
        type: "DEL_TODO",
        payload: { id }
    }
}


