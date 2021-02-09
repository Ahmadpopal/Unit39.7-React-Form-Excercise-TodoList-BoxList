import React, {useState} from 'react';
import NewTodoForm from './NewTodoForm';
import {v4 as uuid} from 'uuid'
import Todo from "./Todo"
import './TodoList.css'




const TodoList= () => {
    const INITIAL_STATE = [
        // {id: 1, todo: "go to work"}, 
        // {id: 2, todo: "Attend the Meeting"}, 
        // {id: 3, todo: "Leave At 4 pm"}
    ]


    const [todos, setTodos] = useState(INITIAL_STATE)


    function addTodo(todoObj){
        setTodos((todo) => [...todos, {id: uuid(), ...todoObj}])
    }

    function removeTodo(id){
        setTodos(todos => todos.filter(todo => todo.id !== id));
    }



    return (
        <div className="TodoList">
            <h1 className="TodoList-title">Todo List</h1>
            <NewTodoForm  addTodo={addTodo}/>
            <h2 className="TodoList-subtitle">Todo List</h2>
            {todos.map((todos) => (
                <Todo key={todos.id} todo={todos.todo} id={todos.id} removeTodo={removeTodo}/>
            ))}
        </div>
    )
}

export default TodoList