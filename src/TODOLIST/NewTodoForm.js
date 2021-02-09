import React, {useState} from 'react';
import './NewTodoForm.css'


const NewTodoForm = ({addTodo}) => {
const INITIAL_STATE = {
    todo: ""
}

const [formData, setFormData] = useState(INITIAL_STATE)

function handleChange(e){
    const {name, value } = e.target;
    setFormData((formData) => ({
        ...formData, 
        [name]: value
    }))
}

function handleSubmit(e){
    e.preventDefault();
    addTodo({...formData})
    setFormData(INITIAL_STATE)
}


    return (
        <form className="NewTodoForm" onSubmit={handleSubmit}>
            <label className="NewTodoForm-label" htmlFor="todo">New Todo</label>
            <input 
            className="NewTodoForm-input"
            id="tode" 
            name="todo" 
            placeholder="Add Todos" 
            type="text" 
            value={formData.todo}
            onChange={handleChange}/>
            <button className="NewTodoForm-btn">Add Todo</button>
        </form>
    )
}

export default NewTodoForm