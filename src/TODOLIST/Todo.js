import React, {useState} from 'react';
import './Todo.css'


const Todo = ({todo, id, removeTodo}) => {

    function remove(){
        removeTodo(id)
    }

    return (
        <div className="Todo">
            <ul className="Todo-ul">
                <li >{todo}<button className="Todo-btn" onClick={remove}>X</button></li>
            </ul>
        </div>
    )
}

export default Todo