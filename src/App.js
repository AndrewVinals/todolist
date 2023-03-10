import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
// hi
const LOCAL_STORAGE_KEY = 'react-todo-list-todos'

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storageTodos =  JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storageTodos){
      setTodos(storageTodos)
    }
  }, [])
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  const addTodo = (todo) => {
    setTodos([todo,...todos])
  }

  const toggleComplete = (id) => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id){
          return {
            ...todo,completed: !todo.completed
          }
        }
      })
    )
  }

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div className="App">
      <header className='App-header'>
        <p>Todo<span id='yellow'>list</span></p>
        <TodoForm addTodo={addTodo}/>
        <TodoList 
        todos={todos} 
        toggleComplete={toggleComplete}
        removeTodo={removeTodo}
        />
      </header>
     
    </div>
  );
}

export default App;
