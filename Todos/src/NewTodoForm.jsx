import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function NewTodoForm({ createTodo }) {
    const [task, setTask] = useState("");

    const handleChange = (evt) => {
        setTask(evt.target.value);
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        createTodo({ task, id: uuid() });
        setTask("");
    };
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="task">Task</label>
            <input
                id="task"
                name="task"
                type="task"
                placeholder="New Task here"
                onChange={handleChange}
                value={task}
            />
            <button>Add todo</button>
        </form>
    );
}

export default NewTodoForm