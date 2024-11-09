import React from 'react'

function Todo({task= 'todo', id = 1, remove}){

    const handleDelete = () => remove(id)
    
    return(
        <div>
            <li>{task}</li>
            <button onClick={handleDelete}>X</button>
        </div>
    )
}

export default Todo