import { useState } from 'react';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Button from 'react-bootstrap/Button';
import '../App';

const TodoForm = ({ addTodo }) => {
    const [todo, setTodo] = useState({
        id: "",
        task: "",
        completed: false
    })
    const handleTaskInputChange = (e) => {
        setTodo({...todo, task: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (todo.task.trim()) {
            addTodo({...todo, id: uuidv4() })
            setTodo({...todo, task:""})
        }
    }
    return(
        <form onSubmit={handleSubmit}>
            <input name="task" type="text" value={todo.task} onChange={handleTaskInputChange}/>
            <input id="submit" type="submit"/>
            {/* <Button id="submit" variant="warning" type="submit">submit</Button> */}
        </form>
    )
}

export default TodoForm;