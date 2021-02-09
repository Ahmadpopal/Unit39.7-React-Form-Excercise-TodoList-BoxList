import React, {useState} from "react"



const NewBoxForm = ({addBox}) => {
    const INITIAL_STATE = {
        color: "",
        width: "", 
        height: ""
    }
    const [formData, setFormData] = useState(INITIAL_STATE);


    function handleChange(e) {
        const {name, value} = e.target;

        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    function handleSubmit(e){
        e.preventDefault();
        addBox({...formData})
        setFormData(INITIAL_STATE)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="color">Color</label>
            <input 
            id="color" 
            name="color"
            type="text" 
            placeholder="Color" 
            value={formData.color} 
            onChange={handleChange}
            />

            <label htmlFor="width">Width</label>
            <input 
            id="width" 
            name="width"
            type="text" 
            placeholder="Box Width" 
            value={formData.width} 
            onChange={handleChange}
            />

            <label htmlFor="height">Height</label>
            <input 
            id="height"
            name="height" 
            type="text" 
            placeholder="Box Height" 
            value={formData.height} 
            onChange={handleChange}
            />

            <button>Add Box</button>
        </form>
    )
}


export default NewBoxForm